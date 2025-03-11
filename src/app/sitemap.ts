import type { MetadataRoute } from 'next';

import { BASE_URL_ENV } from '@/config';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL_ENV}/es`,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: 'yearly',
      alternates: {
        languages: {
          en: `${BASE_URL_ENV}/en`,
          ro: `${BASE_URL_ENV}/ro`,
          ca: `${BASE_URL_ENV}/ca`,
        },
      },
    },

    {
      url: `${BASE_URL_ENV}/es/contacto`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: 'yearly',
      alternates: {
        languages: {
          en: `${BASE_URL_ENV}/contact`,
          ro: `${BASE_URL_ENV}/contact`,
          ca: `${BASE_URL_ENV}/contacte`,
        },
      },
    },
    {
      url: `${BASE_URL_ENV}/es/certificados`,
      priority: 0.9,
      changeFrequency: 'yearly',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${BASE_URL_ENV}/certificates`,
          ro: `${BASE_URL_ENV}/certificate`,
          ca: `${BASE_URL_ENV}/certificats`,
        },
      },
    },
    {
      url: `${BASE_URL_ENV}/es/experiencia`,
      priority: 0.9,
      changeFrequency: 'yearly',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${BASE_URL_ENV}/experience`,
          ro: `${BASE_URL_ENV}/experienta`,
          ca: `${BASE_URL_ENV}/experiencia`,
        },
      },
    },
    {
      url: `${BASE_URL_ENV}/es/trabajos`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: 'yearly',
      alternates: {
        languages: {
          en: `${BASE_URL_ENV}/jobs`,
          ro: `${BASE_URL_ENV}/locuri-de-munca`,
          ca: `${BASE_URL_ENV}/feines`,
        },
      },
    },
  ];
}
