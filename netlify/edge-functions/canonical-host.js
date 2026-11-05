// Run before generated Gatsby routing, including client-only /a/* pages.
export default async (request, context) => {
  const url = new URL(request.url);
  if (url.hostname !== 'openinfra.dev') return context.next();
  url.protocol = 'https:';
  url.host = 'openinfra.org';
  return new Response(null, {
    status: 301,
    headers: { Location: url.toString(), 'Cache-Control': 'public, max-age=300' }
  });
};
export const config = { path: '/*' };
