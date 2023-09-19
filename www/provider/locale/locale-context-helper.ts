/* global localStorage */

import {localeConst, localeNameList} from './locale-context-const';
import {LocaleNameEnum} from './locale-context-type';

export function getSavedLocaleName(): LocaleNameEnum {
    const defaultLocaleName: LocaleNameEnum = localeConst.defaults.localeName;
    const savedLocaleName = localStorage.getItem(localeConst.key.localStorage.localeName) || '';

    return (
        localeNameList.find((localeNameInList: LocaleNameEnum): boolean => localeNameInList === savedLocaleName) ||
        defaultLocaleName
    );
}

export function saveLocaleName<LocaleName extends string>(localeName: LocaleName): LocaleName {
    const {localeName: localeSavedKey} = localeConst.key.localStorage;

    console.log('---> save localeName localStorage:', localeSavedKey, localeName);
    localStorage.setItem(localeSavedKey, localeName);

    return localeName;
}
