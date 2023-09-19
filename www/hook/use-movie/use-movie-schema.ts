import {JSONSchemaType} from 'ajv';

import {
    ExternalRatingType,
    MovieAdditionalDataType,
    MovieShortDataResponseType,
    MovieShortDataType,
} from './use-movie-type';

export const movieShortDataTypeSchema: JSONSchemaType<MovieShortDataType> = {
    additionalProperties: true,
    properties: {
        director: {type: 'string'},
        // eslint-disable-next-line camelcase, id-match
        episode_id: {type: 'number'},
        // eslint-disable-next-line camelcase, id-match
        opening_crawl: {type: 'string'},
        // eslint-disable-next-line camelcase, id-match
        release_date: {type: 'string'},
        title: {type: 'string'},
    },
    required: ['director', 'episode_id', 'opening_crawl', 'release_date', 'title'],
    type: 'object',
};

export const movieShortDataResponseSchema: JSONSchemaType<MovieShortDataResponseType> = {
    additionalProperties: true,
    properties: {
        count: {type: 'number'},
        results: {
            items: movieShortDataTypeSchema,
            type: 'array',
        },
    },
    required: ['count', 'results'],
    type: 'object',
};

export const externalRatingSchema: JSONSchemaType<ExternalRatingType> = {
    additionalProperties: true,
    properties: {
        Source: {type: 'string'},
        Value: {type: 'string'},
    },
    required: ['Source', 'Value'],
    type: 'object',
};

export const movieAdditionalDataSchema: JSONSchemaType<MovieAdditionalDataType> = {
    additionalProperties: true,
    properties: {
        Poster: {type: 'string'},
        Ratings: {items: externalRatingSchema, type: 'array'},
    },
    required: ['Poster', 'Ratings'],
    type: 'object',
};
