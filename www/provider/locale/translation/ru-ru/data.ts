/* eslint-disable id-match, id-length, max-len, sonarjs/no-duplicate-string, sort-keys, babel/quotes */

import {LocaleDictionaryType} from '../type';

export const ruRu: LocaleDictionaryType = {
    META__LANGUAGE_NAME: 'Русский',
    META__LANGUAGE: 'Язык',
    UI__EMPTY_STRING: '',

    SORT__SORT_BY: 'Сортировка...',
    SEARCH__TYPE_TO_FILTER: 'Введите чтобы отфильтровать...',

    MOVIE_INFO__DIRECTED_BY: 'Режиссер: {name}',
    MOVIE_INFO__AVERAGE_RATING: 'Средний рейтинг:',

    SORT_ID__YEAR: 'Год',
    SORT_ID__EPISODE: 'Эпизод',
    SORT_ID__TITLE: 'Название',
    SORT_ID__RATING: 'Рейтинг',

    MOVIE__EPISODE__NUMBER: 'ЭПИЗОД {number}',
    MOVIE__EPISODE__LATIN_NUMBER: 'Эпизод {latinNumber}',
    MOVIE_INFO__SELECT_MOVIE_FROM_THE_LIST: 'Выберите фильм из списка.',
    MOVIE_LIST__NOTING_TO_SHOW: 'Здесь ничего, настройте фильтр.',

    MESSAGE__LOADING: 'Загрузка...',
    MESSAGE__LOADING_ERROR: 'Ошибка загрузки!',
} as const;
