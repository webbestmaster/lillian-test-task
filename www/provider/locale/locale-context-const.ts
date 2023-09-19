import {enUs} from './translation/en-us/data';
import {ruRu} from './translation/ru-ru/data';
import {beBy} from './translation/be-by/data';
import {svSe} from './translation/sv-se/data';
import {ukUa} from './translation/uk-ua/data';

import {LocaleDictionaryType} from './translation/type';
import {LocaleConstType, LocaleNameEnum} from './locale-context-type';

export const allLocalesData: Record<LocaleNameEnum, LocaleDictionaryType> = {
    [LocaleNameEnum.enUs]: enUs,
    [LocaleNameEnum.ruRu]: ruRu,
    [LocaleNameEnum.beBy]: beBy,
    [LocaleNameEnum.svSe]: svSe,
    [LocaleNameEnum.ukUa]: ukUa,
};

export const localeNameList: Array<LocaleNameEnum> = Object.values(LocaleNameEnum);

export const localeConst: LocaleConstType = {
    defaults: {
        localeName: LocaleNameEnum.enUs,
    },
    key: {
        localStorage: {
            localeName: 'my-locale-name-v.1.0', // PROJECT_ID + 'my-locale-name-v.1.0'
        },
    },
};
