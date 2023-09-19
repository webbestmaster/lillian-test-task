import {SortIdEnum, SortItemType} from './sort-type';

export const sortList: Array<SortItemType> = [
    {
        langKey: 'SORT_ID__EPISODE',
        sortId: SortIdEnum.episode,
    },
    {
        langKey: 'SORT_ID__TITLE',
        sortId: SortIdEnum.title,
    },
    {
        langKey: 'SORT_ID__RATING',
        sortId: SortIdEnum.rating,
    },
    {
        langKey: 'SORT_ID__YEAR',
        sortId: SortIdEnum.year,
    },
];
