const nodeExternals = require("webpack-node-externals");
const path = require("path");
const webPackNodeExternals = require('webpack-node-externals');

// tell webpack to run babel on every file it runs through
const js = {
    // only aply babel on js file
    test: /\.js$/,
    //exclude node modules of course
    exclude: /node_modules/,
    use: {
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
    },
    },
};

const serverConfig = {
    mode: "development",
    // inform webpack that we're building a bundle for nodeJS rather than for the browser
    target: "node",
    node: {
        __dirname: false,
    },
    externals: [nodeExternals()],
    //Root file of our server application
    entry: {
        "index.js": path.resolve(__dirname, "src/server/index.js"),
    },
    module: {
        // tell webpack to run babel on every file it runs through
        rules: [js],
    },
    // tell webpack where to put the output file generated
    output: {
        path: path.resolve(__dirname, "dist/build"),
        filename: "[name]",
    },

    // tell webpack to do not bundle libraries that already exists on node-modules (for server only)
    externals:[webPackNodeExternals()]
};


const clientConfig = {
    mode: "development",
    // inform webpack that we're building a bundle for the browser rather than for the nodejs
    target: "web",
    entry: {
        "index.js": path.resolve(__dirname, "src/browser/index.js")
    },
    module: {
        // tell webpack to run babel on every file it runs through
        rules: [js],
    },
    // tell webpack where to put the output file generated
    output: {
        path: path.resolve(__dirname, "dist/public"),
        filename: "[name]",
    },
};

module.exports = [serverConfig, clientConfig];