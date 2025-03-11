import type { MetadataRoute } from 'next';

import { BASE_URL_ENV } from '@/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BASE_URL_ENV}/sitemap.xml`,
  };
}
