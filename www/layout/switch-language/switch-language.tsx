import {useCallback} from 'react';

import {useLocale} from '../../provider/locale/locale-context';
import {LocaleNameEnum} from '../../provider/locale/locale-context-type';
import {localeNameList} from '../../provider/locale/locale-context-const';

import switchLanguageStyle from './switch-language.scss';

export function SwitchLanguage() {
    const {localeName, setLocaleName} = useLocale();

    const switchToNextLocale = useCallback(() => {
        const nextLocaleName: LocaleNameEnum =
            localeNameList[localeNameList.indexOf(localeName) + 1] || localeNameList[0];

        setLocaleName(nextLocaleName);
    }, [localeName, setLocaleName]);

    return (
        <button className={switchLanguageStyle.switch_language} onClick={switchToNextLocale} type="button">
            Ў/Ö: {localeName}
        </button>
    );
}
