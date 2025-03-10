'use client';

import { useActionState, useEffect } from 'react';

import { toast } from 'sonner';

import {
  type ActionResponse,
  sendEmailAction,
} from '@/action/sendEmaillAction';
import { HoverMouseButtonType } from '@/app/[locale]/components/cursor/HoverMouseButtonType';

import { DivButtonMouse } from '../DivButtonMouse';

interface Props {
  nameTraduction: string;
  emailTraduction: string;
  subjectTraduction: string;
  messageTraduction: string;
  sendTraduction: string;
  successTraduction: string;
  errorTraduction: string;
}
const initialState: ActionResponse = {
  success: false,
};

export const FormClient = ({
  nameTraduction,
  emailTraduction,
  subjectTraduction,
  messageTraduction,
  sendTraduction,
  successTraduction,
  errorTraduction,
}: Props) => {
  const [state, action, insPending] = useActionState(
    sendEmailAction,
    initialState,
  );

  useEffect(() => {
    if (state.errors) {
      toast.error(errorTraduction);
      console.error('Errors:', JSON.stringify(state.errors, null, 2));
    }
  }, [state.errors]);

  useEffect(() => {
    if (state.success) {
      toast.success(successTraduction), (state.success = false);
    }
  }, [state.success]);

  return (
    <form action={action} className="relative mt-4 space-y-4">
      <HoverMouseButtonType>
        <input
          type="text"
          name="name"
          required
          placeholder={nameTraduction}
          defaultValue={state.inputs?.name}
          className="w-full rounded-lg border p-3"
        />
      </HoverMouseButtonType>

      <HoverMouseButtonType>
        <input
          type="email"
          name="email"
          required
          placeholder={emailTraduction}
          defaultValue={state.inputs?.email}
          className="w-full rounded-lg border p-3"
        />
      </HoverMouseButtonType>

      <HoverMouseButtonType>
        <input
          type="text"
          name="subject"
          required
          placeholder={subjectTraduction}
          defaultValue={state.inputs?.subject}
          className="w-full rounded-lg border p-3"
        />
      </HoverMouseButtonType>

      <HoverMouseButtonType>
        <textarea
          name="message"
          required
          placeholder={messageTraduction}
          defaultValue={state.inputs?.message}
          rows={4}
          className="w-full rounded-lg border p-3"
        />
      </HoverMouseButtonType>
      <HoverMouseButtonType>
        <button
          disabled={insPending}
          type="submit"
          className="w-full text-fl-sm font-bold"
        >
          <DivButtonMouse
            className="grid place-items-center rounded-xl border-2 border-dark-bg px-[1vw] py-[0.4vw] shadow-[3px_3px_0px_black] dark:border-light-bg dark:shadow-[3px_3px_0px_#F7F7F7]"
            durationAnimation={0.4}
          >
            {insPending ? 'Sending...' : sendTraduction}
          </DivButtonMouse>
        </button>
      </HoverMouseButtonType>
    </form>
  );
};
