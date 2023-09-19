/* eslint-disable id-match, id-length, max-len, sonarjs/no-duplicate-string, sort-keys, babel/quotes */

import {LocaleDictionaryType} from '../type';

export const svSe: LocaleDictionaryType = {
    META__LANGUAGE_NAME: 'Svenska',
    META__LANGUAGE: 'Språket',
    UI__EMPTY_STRING: '',

    SORT__SORT_BY: 'Sortera efter...',
    SEARCH__TYPE_TO_FILTER: 'Skriv för att filtrera...',

    MOVIE_INFO__DIRECTED_BY: 'Regisserad av: {name}',
    MOVIE_INFO__AVERAGE_RATING: 'Genomsnittligt betyg:',

    SORT_ID__YEAR: 'År',
    SORT_ID__EPISODE: 'Episod',
    SORT_ID__TITLE: 'Titel',
    SORT_ID__RATING: 'Betyg',

    MOVIE__EPISODE__NUMBER: 'EPISOD {number}',
    MOVIE__EPISODE__LATIN_NUMBER: 'Episod {latinNumber}',
    MOVIE_INFO__SELECT_MOVIE_FROM_THE_LIST: 'Välj film från listan.',
    MOVIE_LIST__NOTING_TO_SHOW: 'Inget att visa, ställ in filtret.',

    MESSAGE__LOADING: 'Läser in...',
    MESSAGE__LOADING_ERROR: 'Inläsningsfel!',
} as const;
