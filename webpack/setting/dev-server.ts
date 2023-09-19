import {WebpackOptionsNormalized} from 'webpack';

import {webpackDevServerPort} from '../config';

export const devServer: WebpackOptionsNormalized['devServer'] = {
    historyApiFallback: {
        disableDotRule: true,
    },
    host: 'localhost',
    hot: true,
    open: true,
    port: webpackDevServerPort,
};
