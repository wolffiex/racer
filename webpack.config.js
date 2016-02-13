module.exports = {
    context: __dirname + "/src",
    entry: "./game.js",
    output: {
        path: './dist',
        filename: "bundle.js"
    },
    module: {
      loaders: [
        { test: /\.css$/, loader: "style!css" },
        { test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel?presets[]=es2015'
        }
      ]
    }
};
