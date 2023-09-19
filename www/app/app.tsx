import {StrictMode} from 'react';

import {LocalizationProvider} from '../provider/locale/locale-context';

import {AppRouting} from './app-routing';

export function App(): JSX.Element {
    return (
        <StrictMode>
            <LocalizationProvider>
                <AppRouting />
            </LocalizationProvider>
        </StrictMode>
    );
}
