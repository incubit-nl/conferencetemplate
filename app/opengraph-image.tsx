import { ImageResponse } from 'next/og';
import { getEnvVars } from '@/lib/env';

export const runtime = 'edge';
export const alt = 'Event Preview Image';
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  const env = await getEnvVars();

  return new ImageResponse(
    (
      <div
        style={{
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 48,
        }}
      >
        <h1
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 24,
            textAlign: 'center',
          }}
        >
          {env.EVENT_NAME}
        </h1>
        <p
          style={{
            fontSize: 32,
            color: 'white',
            textAlign: 'center',
          }}
        >
          {env.EVENT_SHORT_DESCRIPTION}
        </p>
        <p
          style={{
            fontSize: 24,
            color: 'white',
            marginTop: 24,
          }}
        >
          {new Date(env.EVENT_DATE).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}