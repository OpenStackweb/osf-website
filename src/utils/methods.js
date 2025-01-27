const URI = require('urijs');

function getPageSlugFromSEO(SEOobject, fallbackUrl) {
  if (SEOobject && SEOobject.url) {
    const uri = new URI(SEOobject.url);
    return uri.pathname();
  }
  return fallbackUrl;
}

module.exports = {
  getPageSlugFromSEO,
};