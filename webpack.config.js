module.exports = (env) => {
  if (env && env.NODE_ENV === 'production') {
    return require('./scripts/prod.config.js');
  } else {
    return require('./scripts/dev.config.js');
  }
}