const webpack = require("webpack")

module.exports = function override(config, env) {
    // New config, e.g. config.plugins.push...
  //do stuff with the webpack config...
  config.resolve.fallback = {
    ...config.resolve.fallback,
    stream: require.resolve("stream-browserify"),
    buffer: require.resolve("buffer"),
}
config.resolve.extensions = [...config.resolve.extensions, ".ts", ".js"]
config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
        process: "process/browser",
        Buffer: ["buffer", "Buffer"],
    }),
]
    config.module.rules = [...config.module.rules, 
        {
            test: /\.m?js/,
            resolve: {
              fullySpecified: false,
              fallback: {
                "crypto": require.resolve("crypto-browserify"),
                "stream": require.resolve("stream-browserify"),
                
            }
            }
        }
      ]

    return config
}