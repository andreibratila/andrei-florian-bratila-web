import type { MetadataRoute } from 'next';

import { BASE_URL_ENV } from '@/config';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL_ENV}`,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: 'yearly',
      alternates: {
        languages: {
          en: `${BASE_URL_ENV}/en/en`,
          ro: `${BASE_URL_ENV}/ro/ro`,
          ca: `${BASE_URL_ENV}/ca/ca`,
        },
      },
    },

    {
      url: `${BASE_URL_ENV}/contacto`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: 'yearly',
      alternates: {
        languages: {
          en: `${BASE_URL_ENV}/en/contact`,
          ro: `${BASE_URL_ENV}/ro/contact`,
          ca: `${BASE_URL_ENV}/ca/contacte`,
        },
      },
    },
    {
      url: `${BASE_URL_ENV}/certificados`,
      priority: 0.9,
      changeFrequency: 'yearly',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${BASE_URL_ENV}/en/certificates`,
          ro: `${BASE_URL_ENV}/ro/certificate`,
          ca: `${BASE_URL_ENV}/ca/certificats`,
        },
      },
    },
    {
      url: `${BASE_URL_ENV}/experiencia`,
      priority: 0.9,
      changeFrequency: 'yearly',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${BASE_URL_ENV}/en/experience`,
          ro: `${BASE_URL_ENV}/ro/experienta`,
          ca: `${BASE_URL_ENV}/ca/experiencia`,
        },
      },
    },
    {
      url: `${BASE_URL_ENV}/trabajos`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: 'yearly',
      alternates: {
        languages: {
          en: `${BASE_URL_ENV}/en/jobs`,
          ro: `${BASE_URL_ENV}/ro/locuri-de-munca`,
          ca: `${BASE_URL_ENV}/ca/feines`,
        },
      },
    },
  ];
}
