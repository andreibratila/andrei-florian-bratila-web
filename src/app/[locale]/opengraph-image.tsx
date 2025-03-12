import { ImageResponse } from 'next/og';

// Configuración de la imagen
export const alt = 'Andrei Florian Bratila - Web Developer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Generación de la imagen
export default function Image() {
  // Cargar fuente

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #f0f0f0, #d6d6d6)',
          fontFamily: 'Arial, sans-serif',
          fontWeight: 700,
        }}
      >
        {/* Logo + Nombre */}
        <div
          style={{
            position: 'absolute',
            top: 42,
            left: 42,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              width: 24,
              height: 24,
              background: 'black',
            }}
          />
          <span
            style={{
              marginLeft: 10,
              fontSize: 24,
            }}
          >
            andreiflorianbratila.dev
          </span>
        </div>

        {/* Bloque Principal */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: 800,
            padding: '40px 60px',
            backgroundColor: 'black',
            color: 'white',
            textTransform: 'uppercase',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          }}
        >
          {/* Primer Bloque */}
          <div
            style={{
              fontSize: 50,
              marginBottom: 25,
              borderBottom: '4px solid white',
              paddingBottom: 12,
              width: '100%',
            }}
          >
            Full Stack Developer
          </div>

          {/* Segundo Bloque */}
          <div
            style={{
              fontSize: 30,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
            }}
          >
            <span style={{ background: '#222', padding: '12px 16px' }}>
              Next.js
            </span>
            <span style={{ background: '#222', padding: '12px 16px' }}>
              TYPESCRIPT
            </span>
            <span style={{ background: '#222', padding: '12px 16px' }}>
              NEST.JS
            </span>
            <span style={{ background: '#222', padding: '12px 16px' }}>
              POSTGRESQL
            </span>
            <span style={{ background: '#222', padding: '12px 16px' }}>
              Solidity
            </span>
            <span style={{ background: '#222', padding: '12px 16px' }}>
              Nginx
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
