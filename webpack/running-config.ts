import path from 'node:path';

import {Configuration} from 'webpack';
// import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

import {optimization} from './setting/optimization';
import {rules} from './setting/module/rules';
import {alias} from './setting/resolve/alias';
import {extensions} from './setting/resolve/extensions';
import {plugins} from './setting/plugins';
import {devServer} from './setting/dev-server';
import {watchOptions} from './setting/watch-options';

import {pathToStaticFileFolder, isDevelopment, pathToDistribution, cwd, nodeEnvironment} from './config';

const webpackConfig: Configuration = {
    devtool: 'source-map',
    entry: ['./www/css/root.scss', './www/root.tsx'],
    mode: nodeEnvironment,
    module: {rules},
    output: {
        assetModuleFilename: isDevelopment
            ? 'build-asset/[name]----[hash:6][ext][query]'
            : 'build-asset/[hash:6][ext][query]',
        chunkFilename: isDevelopment ? '[name].chunk.js' : '[name].[hash:6].chunk.js',
        filename: isDevelopment ? '[name].js' : 'index.js',
        path: path.join(cwd, pathToDistribution),
        pathinfo: false,
        publicPath: isDevelopment ? '/' : pathToStaticFileFolder,
    },
    plugins,
    resolve: {alias, extensions},
};

// webpackConfig?.plugins?.push(new BundleAnalyzerPlugin());

export const webpackRunningConfig = {...webpackConfig, devServer, optimization, watchOptions};
