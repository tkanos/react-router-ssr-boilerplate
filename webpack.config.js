const path = require("path");
const dotenv = require("dotenv")
const webPackNodeExternals = require('webpack-node-externals');

const NODE_ENV = process.env.NODE_ENV || 'production'
const isDev = NODE_ENV === 'development'
if (isDev) {
  dotenv.config({ path: '.env.local' })
  dotenv.config({ path: '.env.default' })
}



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

const commonAliases = {
    '@components': path.resolve(__dirname, './src/isomorphic/components/'),
    '@pages': path.resolve(__dirname, './src/isomorphic/pages/'),
    '@config': path.resolve(__dirname, './src/server/config'),
  }
  

const serverConfig = {
    mode: "development",
    // inform webpack that we're building a bundle for nodeJS rather than for the browser
    target: "node",
    node: {
        __dirname: false,
    },
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
    resolve: {
        alias: {
            ...commonAliases
        }, 
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
    resolve: {
        alias: {
            ...commonAliases
        }, 
        aliasFields: ['browser'],
    },
};

module.exports = [serverConfig, clientConfig];