const CracoLessPlugin = require("craco-less");
const CracoAntDesignPlugin = require("craco-antd");

const {CracoAliasPlugin, configPaths} = require('react-app-rewire-alias');
const aliasMap = configPaths('./tsconfig.paths.json');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    },
    {
      plugin: CracoAntDesignPlugin,
    },
    {
      plugin: CracoAliasPlugin,
      options: {alias: aliasMap}
    }
  ]
}