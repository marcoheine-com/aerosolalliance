export function modifyImageUrl(imageUrl) {
    function includesMatch(lookupValue, urlString) {
      const re = new RegExp(lookupValue, 'i');
      return urlString?.match(re) !== null;
    }
    if (includesMatch("images.prismic", imageUrl)) {
    return `${imageUrl}&h=60&dpr=2`;
    }
    return imageUrl;
  }