// Only return to local pages; never follow an external redirect from a query string.
export const membershipReturnPath = (value, origin) => {
  try {
    const decoded = decodeURIComponent(value || '');
    if (!decoded || /[\\\r\n]/.test(decoded)) return '/a/profile';
    const url = new URL(decoded, origin);
    if (url.origin !== origin || !url.pathname.startsWith('/') ||
        /\/(renew-membership|auth|callback|logout)(\/|$)/i.test(url.pathname)) return '/a/profile';
    return url.pathname + url.search + url.hash;
  } catch (_) {
    return '/a/profile';
  }
};
