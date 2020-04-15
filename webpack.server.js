const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
    // Inform webpack that we're building a bundle
    // for NodeJS, rather than for the browser
    target: "node",

    entry: "./src/server/index.js",
    output: {
        filename: "server.bundle.js",
        path: path.resolve(__dirname, "build"),
    },
    externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
