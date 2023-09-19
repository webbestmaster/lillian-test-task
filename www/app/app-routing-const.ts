import {RouteObject} from 'react-router-dom';

import {Error404} from '../page/error-404/error-404';
import {HomePage} from '../page/home/home-page';

import {appRoute} from './app-route';

export const routeDataList: Array<RouteObject> = [
    {
        Component: HomePage,
        path: appRoute.root.path,
    },
    {
        Component: Error404,
        path: '*',
    },
];
