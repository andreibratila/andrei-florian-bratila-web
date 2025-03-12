import createMiddleware from 'next-intl/middleware';

// import { NextRequest, NextResponse } from 'next/server';

import { routing } from './i18n/routing';

export default createMiddleware(routing);

// import { LocaleI } from './i18n';
// // Necesario para las redirecciones

// const supportedLocales = routing.locales; // Idiomas válidos
// const defaultLocale = routing.defaultLocale; // Idioma por defecto

// export default function customMiddleware(req: NextRequest) {
//   const url = req.nextUrl; // Obtenemos la URL de la solicitud
//   const pathname = url.pathname; // Ruta solicitada

//   // Obtener el idioma del primer segmento de la URL
//   const locale = pathname.split('/')[1];

//   // Si el idioma no está en los idiomas soportados
//   if (locale && !supportedLocales.includes(locale as LocaleI)) {
//     // Redirigir a la página principal (/) o al idioma predeterminado (/es)
//     return NextResponse.redirect(new URL(`/${defaultLocale}`, req.url));
//   }

//   // Si el idioma es válido o no hay un idioma definido, continuar con el middleware normal
//   return createMiddleware(routing)(req);
// }

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(es|en|ro|ca)/:path*'],
};

// export const config = {
//   // Match all paths except aquellos que no deberían ser internacionalizados
//   matcher: ['/((?!api|_next|_vercel|.*/opengraph-image|.*\\..*).*)'],
// };
