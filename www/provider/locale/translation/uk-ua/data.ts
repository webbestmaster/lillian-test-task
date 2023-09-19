/* eslint-disable id-match, id-length, max-len, sonarjs/no-duplicate-string, sort-keys, babel/quotes */

import {LocaleDictionaryType} from '../type';

export const ukUa: LocaleDictionaryType = {
    META__LANGUAGE_NAME: 'Українська',
    META__LANGUAGE: 'Мова',
    UI__EMPTY_STRING: '',

    SORT__SORT_BY: 'Сортувати за...',
    SEARCH__TYPE_TO_FILTER: 'Введіть для фільтрації...',

    MOVIE_INFO__DIRECTED_BY: 'Режисер: {name}',
    MOVIE_INFO__AVERAGE_RATING: 'Середня оцінка:',

    SORT_ID__YEAR: 'Рік',
    SORT_ID__EPISODE: 'Епізод',
    SORT_ID__TITLE: 'Назва',
    SORT_ID__RATING: 'Рейтинг',

    MOVIE__EPISODE__NUMBER: 'ЕПІЗОД {number}',
    MOVIE__EPISODE__LATIN_NUMBER: 'Епізод {latinNumber}',
    MOVIE_INFO__SELECT_MOVIE_FROM_THE_LIST: 'Виберіть фільм зі списку.',
    MOVIE_LIST__NOTING_TO_SHOW: 'Нічого для показу, установіть фільтр.',

    MESSAGE__LOADING: 'Завантаження...',
    MESSAGE__LOADING_ERROR: 'Помилка завантаження!',
} as const;
