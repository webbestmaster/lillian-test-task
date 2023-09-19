export enum LocaleNameEnum {
    beBy = 'be-BY',
    enUs = 'en-US',
    ruRu = 'ru-RU',
    svSe = 'sv-SE',
    ukUa = 'uk-UA',
}

export type LocaleConstType = Readonly<{
    defaults: {
        localeName: LocaleNameEnum;
    };
    key: {
        localStorage: {
            localeName: string;
        };
    };
}>;
