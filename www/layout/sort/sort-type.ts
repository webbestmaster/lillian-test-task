import {LangKeyType} from '../../provider/locale/translation/type';

export enum SortIdEnum {
    episode = 'episode',
    rating = 'rating',
    title = 'title',
    year = 'year',
}

export type SortItemType = {
    langKey: LangKeyType;
    sortId: SortIdEnum;
};
