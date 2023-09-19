import {env, cwd as processCwd} from 'node:process';

export const pathToStaticFileFolder = '/static/';

const modeDevelopmentName = 'development';
const modeProductionName = 'production';

export const isDevelopment: boolean = env.NODE_ENV === modeDevelopmentName;
export const isProduction: boolean = env.NODE_ENV === modeProductionName;
export const nodeEnvironment: 'development' | 'production' = isProduction ? modeProductionName : modeDevelopmentName;
export const fileRegExp = /\.(svg|webp|png|jpg|jpeg|gif|otf|ttf|woff|woff2|eot|mp3)$/;

export const pathToDistribution = '/dist' + pathToStaticFileFolder;

export const webpackDevServerPort = 9090;

export const cwd: string = processCwd();
