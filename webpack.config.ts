import { Configuration, DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const isDev = process.env.NODE_ENV === 'development';

const common: Configuration = {
  mode: isDev ? 'development' : 'production',
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  externals: ['fsevents'],
  output: {
    assetModuleFilename: 'assets/[name][ext]',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ico|png|svg|eot|woff?2?)$/,
        type: 'asset/resource',
      },
    ],
  },
  watch: isDev,
  devtool: isDev ? 'source-map' : undefined,
  stats: {
    children: true,
  },
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};

const main: Configuration = {
  ...common,
  target: 'electron-main',
  entry: {
    main: './src/main.ts',
  },
};

const preload: Configuration = {
  ...common,
  target: 'electron-preload',
  entry: {
    preload: './src/preload.ts',
  },
};

const renderer: Configuration = {
  ...common,
  target: 'web',
  entry: {
    app: './src/react/index.tsx',
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/react/index.html',
    }),
  ],
};

export default isDev ? renderer : [main, preload, renderer];
