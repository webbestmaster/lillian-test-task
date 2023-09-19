import {RouterProvider, createHashRouter} from 'react-router-dom';

import {routeDataList} from './app-routing-const';

export function AppRouting(): JSX.Element {
    const router = createHashRouter(routeDataList);

    return <RouterProvider router={router} />;
}
