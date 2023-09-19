/* global Response, fetch */

import {SortIdEnum} from '../../layout/sort/sort-type';
import {NeverError} from '../../util/error';

import {MovieShortDataResponseType, MovieAdditionalDataType, MovieType} from './use-movie-type';

export function fetchMovieShortData(): Promise<MovieShortDataResponseType> {
    return fetch('https://swapi.dev/api/films/?format=json').then(
        (response: Response): Promise<MovieShortDataResponseType> => {
            return response.json();
        }
    );
}

export function fetchMovieAdditionalData(year: number, title: string): Promise<MovieAdditionalDataType> {
    return fetch(`https://omdbapi.com/?t=${title.replace(/\s+/g, '+')}&y=${year}&apikey=b9a5e69d`).then(
        (response: Response): Promise<MovieAdditionalDataType> => {
            return response.json();
        }
    );
}

function getAscSortedMovieList(moveList: Array<MovieType>, sortId: SortIdEnum): Array<MovieType> {
    switch (sortId) {
        case SortIdEnum.episode: {
            return [...moveList].sort((movieA: MovieType, movieB: MovieType): number => {
                return movieA.shortData.episode_id - movieB.shortData.episode_id;
            });
        }
        case SortIdEnum.title: {
            return [...moveList].sort((movieA: MovieType, movieB: MovieType): number => {
                return movieA.shortData.title > movieB.shortData.title ? 1 : -1;
            });
        }
        case SortIdEnum.year: {
            return [...moveList].sort((movieA: MovieType, movieB: MovieType): number => {
                return (
                    Number.parseInt(movieA.shortData.release_date, 10) -
                    Number.parseInt(movieB.shortData.release_date, 10)
                );
            });
        }
        case SortIdEnum.rating: {
            return [...moveList].sort((movieA: MovieType, movieB: MovieType): number => {
                return movieA.averageRating - movieB.averageRating;
            });
        }

        default: {
            throw new NeverError(sortId);
        }
    }
}

export function getSortedMovieList(
    movieList: Array<MovieType>,
    sortId: SortIdEnum,
    isSortAsc: boolean
): Array<MovieType> {
    const ascSortedMovieList: Array<MovieType> = getAscSortedMovieList(movieList, sortId);

    return isSortAsc ? ascSortedMovieList : ascSortedMovieList.reverse();
}
