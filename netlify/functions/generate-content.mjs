// Intentionally disabled by owner decision on 14 September 2026.
// Retain this tombstone so older clients cannot trigger paid generation.
// Previous implementation is preserved in Git at 18138cb.
export default async () => new Response(
  JSON.stringify({ error: 'Content generation is disabled.', code: 'FEATURE_DISABLED' }),
  {
    status: 410,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  },
);
