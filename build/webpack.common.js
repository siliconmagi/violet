const webpack = require('webpack');
const helpers = require('./helpers');

const AssetsPlugin = require('assets-webpack-plugin');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const HtmlElementsPlugin = require('./html-elements-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');

const METADATA = {
  title: 'Nightshell',
  baseUrl: '/',
};

module.exports = function (options) {
  isProd = options.env === 'production';
  return {
    entry: {
      'main': './src/index.tsx',
    },
    // Add alias for compat testing
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
      modules: [helpers.root('src'), helpers.root('node_modules')],
      alias: {
        'react': 'inferno-compat',
        'react-dom': 'inferno-compat'
      },
    },
    module: {
      rules: [
        {
          test: /tsx?$/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: [['es2015', { "modules": false }], 'stage-3'],
              plugins: [['inferno', { "imports": true}]],
            },
          }, {
            loader: 'awesome-typescript-loader?{configFileName: "tsconfig.webpack.json"}',
          }],
        },
        {
          test: /\.json$/,
          use: 'json-loader'
        },
        {
          test: /\.css$/,
          use: ['to-string-loader', 'css-loader'],
          exclude: [helpers.root('src', 'styles')]
        },
        {
          test: /\.(sass|scss)$/,
          use: ['to-string-loader', 'css-loader', 'sass-loader'],
          exclude: [helpers.root('src', 'styles')]
        },
        {
          test: /\.html$/,
          use: 'raw-loader',
          exclude: [helpers.root('src/index.html')]
        },
        {
          test: /\.(jpg|png|gif)$/,
          use: 'file-loader'
        },
        {
          test: /\.svg?$/,
          loader: 'svg-sprite-loader!svgo-loader',
          include: [helpers.root('src/icons')]
        },

      ],
    },
    plugins: [
      new AssetsPlugin({
        path: helpers.root('dist'),
        filename: 'webpack-assets.json',
        prettyPrint: true
      }),
      new CheckerPlugin(),
      new CommonsChunkPlugin({
        name: 'vendor',
        chunks: ['main'],
        minChunks: module => /node_modules\//.test(module.resource)
      }),
      new CopyWebpackPlugin([
        { from: 'src/assets', to: 'assets' },
      ]),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        title: METADATA.title,
        chunksSortMode: 'dependency',
        metadata: METADATA,
        inject: 'head'
      }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'defer'
      }),
      new HtmlElementsPlugin({
        headTags: require('./head-config.common')
      }),
    ],
  };
}
