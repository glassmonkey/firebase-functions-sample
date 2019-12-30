const nodeExternals = require('webpack-node-externals');
const GenerateJsonPlugin = require('generate-json-webpack-plugin')

const env = process.env.NODE_ENV;
const dist = "functions";
const distDir =`${__dirname}/${dist}`;
const mode = env && env == "prod" ? "production" : "development";

module.exports = {
    mode: mode,
    target: 'node',
    entry: ["./src/main.js"],
    output: {
        filename: "index.js",
        path: distDir,
        libraryTarget: "this"
    },
    plugins: [
        //firebaseは各種jsonをfunctions内に入れないといけないのでコピー
        new GenerateJsonPlugin('package.json', require('./package')),
        new GenerateJsonPlugin('firebase.json', require('./firebase'))
    ],
    watchOptions: {
        poll: 1000
    },
    externals: [nodeExternals({
        whitelist: []
    })]
};