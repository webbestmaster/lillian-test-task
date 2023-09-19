export type MovieShortDataType = {
    director: string;
    // eslint-disable-next-line id-match
    episode_id: number;
    // eslint-disable-next-line id-match
    opening_crawl: string;
    // eslint-disable-next-line id-match
    release_date: string;
    title: string;
};

export type ExternalRatingType = Record<'Source' | 'Value', string>;

export type MovieAdditionalDataType = {
    Poster: string;
    Ratings: Array<ExternalRatingType>;
};

export type MovieType = {
    additionalData: MovieAdditionalDataType;
    averageRating: number;
    shortData: MovieShortDataType;
};

export enum FetchStateEnum {
    done = 'done',
    error = 'error',
    inProgress = 'in-progress',
}

export type UseMovieType = {
    fetchState: FetchStateEnum;
    movieList: Array<MovieType>;
};

export type MovieShortDataResponseType = {
    count: number;
    results: Array<MovieShortDataType>;
};
