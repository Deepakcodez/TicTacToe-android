const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);
config.resolver.sourceExts = [...config.resolver.sourceExts, "jsx", "js", "ts", "tsx"];

module.exports = withNativeWind(config, { input: "./global.css" });