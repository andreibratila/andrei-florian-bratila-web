import { getTranslations } from 'next-intl/server';
import { ImageResponse } from 'next/og';

import type { LocaleI } from '@/i18n';

// Configuración de la imagen
export const alt = 'Andrei Florian Bratila - Web Developer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';
type PropsMetadata = {
  params: Promise<{ locale: LocaleI }>;
};
// Generación de la imagen
export default async function Image({
  params,
}: PropsMetadata): Promise<ImageResponse> {
  // Cargar fuente
  const locale = (await params).locale;

  const t = await getTranslations({ locale, namespace: 'OpenGraphImage' });
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#ffffff', // Fondo blanco (puedes cambiarlo)
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 64,
          fontFamily: 'Inter, sans-serif',
          color: '#333', // Color oscuro para el texto
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ marginBottom: 16 }}>{t('title')}</h1>
          <p style={{ fontSize: 32 }}>{t('subtitle')}</p>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
