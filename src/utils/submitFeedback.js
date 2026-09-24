// Explicitly invoked by the optional form; never sends audit answers or scores.
export async function submitFeedback({ page, reaction, message }, send = fetch) {
  const body = new URLSearchParams({
    'form-name': 'feedback', page, reaction: reaction || '', message: message.trim(),
  });
  const response = await send('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });
  if (!response.ok) throw new Error('Feedback delivery could not be confirmed');
}
