import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Detecta rutas sin prefijo de idioma
    '/((?!api|_next|_vercel|images|cv|.*\\..*).*)',

    // También sigue detectando rutas con prefijo de idioma
    '/(es|en|ro|ca)/:path*',
  ],
};
