/**
 * @Name: base webpack config
 * @Description:
 * @author RiSusss
 * @date 2019-04-21
 */
const path = require("path");

module.exports = {
  resolve: {
    alias: {
      Utils: path.resolve(__dirname, "../src/utils/"),
      App: path.resolve(__dirname, "../src/app/"),
      Components: path.resolve(__dirname, "../src/components/"),
      Pages: path.resolve(__dirname, "../src/pages/"),
      Assets: path.resolve(__dirname, "../assets/")
    }
  },
  module: {
    rules: []
  }
};
