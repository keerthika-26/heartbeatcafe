// config-overrides.js
module.exports = function override(config, env) {
  const oneOf = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;

  oneOf.forEach(rule => {
    if (!rule.use) return;

    rule.use.forEach(u => {
      if (
        u.loader &&
        u.loader.includes('css-loader') &&
        !u.loader.includes('postcss-loader')
      ) {
        // Only disable URL handling in css-loader
        u.options = {
          ...u.options,
          url: false
        };
      }
    });
  });

  return config;
};


