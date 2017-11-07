module.exports = {
  plugins: {
      'postcss-import': false,
      'postcss-nested': false,

      'postcss-simple-vars': false,
      'postcss-cssnext': {
          warnForDuplicates: false
      },
      'postcss-calc': false,
      'postcss-functions': {
          functions: {
              darken: function (value, frac) {
                var hsla = color(value).toHslaArray();
                hsla[2] = Math.round(Math.max(Math.min(100, hsla[2] - hsla[2] * frac), 0));
                return color().fromHsla(hsla).toHexString();
              }
          }
      },
      'lost': false
  }
}