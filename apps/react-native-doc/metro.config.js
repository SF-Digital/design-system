const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");
const exclusionList = require("metro-config/src/defaults/exclusionList");

const config = getDefaultConfig(__dirname);

// Point Metro to the main node_modules folder and to packages/react-native
config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, "node_modules"),
  path.resolve(__dirname, "../../packages/react-native/node_modules"),
];

// Add `packages/react-native` as a watch folder so Metro can find it
config.watchFolders = [path.resolve(__dirname, "../../packages/react-native")];

// Exclude node_modules within `packages/react-native` to avoid conflicts
config.resolver.blacklistRE = exclusionList([
  /..\/..\/packages\/react-native\/node_modules\/.*/,
]);

module.exports = config;
