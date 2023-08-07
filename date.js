exports.getDate = function (date = new Date(), locale = 'en-US') {
  return date.toLocaleDateString(locale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

exports.getDay = function (date = new Date(), locale = 'en-US') {
  return date.toLocaleDateString(locale, {
    weekday: 'long',
  });
};
