import { notFound } from 'next/navigation';

// export async function generateStaticParams() {
//   const locales = ['en', 'es', 'ro', 'ca']; // Idiomas soportados
//   return locales.map((locale) => ({
//     locale, // Define los parámetros locales
//     params: {
//       locale,
//     },
//   }));
// }

export default function NotFoundDummy() {
  notFound();
}
