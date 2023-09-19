/* eslint-disable id-match, id-length, max-len, sonarjs/no-duplicate-string, sort-keys, babel/quotes */

import {LocaleDictionaryType} from '../type';

export const beBy: LocaleDictionaryType = {
    META__LANGUAGE_NAME: 'Беларуская',
    META__LANGUAGE: 'Мова',
    UI__EMPTY_STRING: '',

    SORT__SORT_BY: 'Сартаваць па...',
    SEARCH__TYPE_TO_FILTER: 'Увядзіце для фільтрацыі...',

    MOVIE_INFO__DIRECTED_BY: 'Рэжысёр: {name}',
    MOVIE_INFO__AVERAGE_RATING: 'Сярэдні рэйтынг:',

    SORT_ID__YEAR: 'Год',
    SORT_ID__EPISODE: 'Эпізод',
    SORT_ID__TITLE: 'Назва',
    SORT_ID__RATING: 'Рэйтынг',

    MOVIE__EPISODE__NUMBER: 'ЭПІЗОД {number}',
    MOVIE__EPISODE__LATIN_NUMBER: 'Эпізод {latinNumber}',
    MOVIE_INFO__SELECT_MOVIE_FROM_THE_LIST: 'Выберыце фільм са спісу.',
    MOVIE_LIST__NOTING_TO_SHOW: 'Няма чаго паказваць, наладзьце фільтр.',

    MESSAGE__LOADING: 'Загрузка...',
    MESSAGE__LOADING_ERROR: 'Памылка загрузкі!',
} as const;
