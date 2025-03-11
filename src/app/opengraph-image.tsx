import { ImageResponse } from 'next/og';

// Configuración de la imagen
export const alt = 'Andrei Florian Bratila - Web Developer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Generación de la imagen
export default async function Image() {
  // Cargar fuente

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
          <h1 style={{ marginBottom: 16 }}>Andrei Florian Bratila</h1>
          <p style={{ fontSize: 32 }}>Web Developer</p>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
