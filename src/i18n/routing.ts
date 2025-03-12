import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'es', 'ro', 'ca'],
  // localePrefix: 'as-needed',
  localeDetection: true,

  // Used when no locale matches
  defaultLocale: 'es',
  pathnames: {
    '/': '/',
    '/cv-download': {
      es: '/descargar-curriculum',
      en: '/cv-download',
      ro: '/descarca-curriculum',
      ca: '/descarrega-curriculum',
    },
    '/legend': {
      es: '/leyenda',
      en: '/legend',
      ro: '/legenda',
      ca: '/legenda',
    },
    '/contact': {
      es: '/contacto',
      en: '/contact',
      ro: '/contact',
      ca: '/contacte',
    },
    '/certificates': {
      es: '/certificados',
      en: '/certificates',
      ro: '/certificate',
      ca: '/certificats',
    },
    '/experience': {
      es: '/experiencia',
      en: '/experience',
      ro: '/experienta',
      ca: '/experiencia',
    },
    '/jobs': {
      es: '/trabajos',
      en: '/jobs',
      ro: '/locuri-de-munca',
      ca: '/feines',
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
