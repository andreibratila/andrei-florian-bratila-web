'use server';

import { mailOptions, transporter } from '@/config/nodemailer';
import { ContactSchema, ContactShemaI } from '@/lib/ContactSchema';

export interface ActionResponse {
  success: boolean;
  errors?: {
    [K in keyof ContactShemaI]?: string[];
  };
  inputs?: ContactShemaI;
}

export async function sendEmailAction(
  prevState: ActionResponse,
  formData: FormData,
) {
  try {
    const rawData: ContactShemaI = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    // Validate the form data
    const validatedData = ContactSchema.safeParse(rawData);

    if (!validatedData.success) {
      return {
        success: false,
        errors: validatedData.error.flatten().fieldErrors,
        inputs: rawData,
      };
    }

    // Here you would typically save the address to your database
    console.log('Address submitted:', validatedData.data);
    const { name, email, subject, message } = validatedData.data;

    await transporter.sendMail(mailOptions(name, email, subject, message));

    return {
      success: true,
    };
  } catch (error: unknown) {
    console.error('Error submitting address:', error);
    return {
      success: false,
      message: 'An unexpected error occurred',
    };
  }
}
