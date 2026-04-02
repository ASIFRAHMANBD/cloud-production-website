'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Fallback only: reload once on Server Action deployment skew.
    if (
      error.message &&
      (error.message.includes('Failed to find Server Action') ||
        error.message.includes('Server Action'))
    ) {
      const reloadFlag = 'server-action-reload-attempted';
      if (!sessionStorage.getItem(reloadFlag)) {
        sessionStorage.setItem(reloadFlag, '1');
        window.location.reload();
      }
    }
  }, [error]);

  return (
    <html lang="en">
      <body style={{
        fontFamily: 'system-ui, "Segoe UI", Roboto, sans-serif',
        padding: '2rem',
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <h1>Something went wrong</h1>
        <p style={{ color: '#666', marginBottom: '1.5rem' }}>
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={() => reset()}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            cursor: 'pointer',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
