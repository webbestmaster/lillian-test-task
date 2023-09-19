import {useEffect, useState} from 'react';

import {getAverageRating} from '../../util/number';

import {
    FetchStateEnum,
    MovieShortDataResponseType,
    MovieAdditionalDataType,
    MovieShortDataType,
    MovieType,
    UseMovieType,
} from './use-movie-type';
import {fetchMovieAdditionalData, fetchMovieShortData} from './use-movie-helper';

export function useMovie(): UseMovieType {
    const [movieList, setMovieList] = useState<Array<MovieType>>([]);
    const [fetchState, setFetchState] = useState<FetchStateEnum>(FetchStateEnum.inProgress);

    useEffect(() => {
        (async () => {
            try {
                const movieShortDataResult: MovieShortDataResponseType = await fetchMovieShortData();

                const movieAdditionalDataList = await Promise.all(
                    movieShortDataResult.results.map<Promise<MovieAdditionalDataType>>(
                        (movieToFetch: MovieShortDataType): Promise<MovieAdditionalDataType> => {
                            return fetchMovieAdditionalData(
                                Number.parseInt(movieToFetch.release_date, 10),
                                movieToFetch.title
                            );
                        }
                    )
                );

                const resultMovieList: Array<MovieType> = movieShortDataResult.results.map<MovieType>(
                    (movieShortData: MovieShortDataType, movieIndex: number): MovieType => {
                        return {
                            additionalData: movieAdditionalDataList[movieIndex],
                            averageRating: getAverageRating(movieAdditionalDataList[movieIndex].Ratings),
                            shortData: movieShortData,
                        };
                    }
                );

                setMovieList(resultMovieList);

                setFetchState(FetchStateEnum.done);
            } catch {
                setFetchState(FetchStateEnum.error);
            }
        })();
    }, []);

    return {
        fetchState,
        movieList,
    };
}
