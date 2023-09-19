import assert from 'node:assert/strict';

import Ajv from 'ajv';

import {describe, test} from '@jest/globals';

import {fetchMovieAdditionalData, fetchMovieShortData} from './use-movie-helper';
import {MovieAdditionalDataType, MovieShortDataResponseType} from './use-movie-type';
import {movieAdditionalDataSchema, movieShortDataResponseSchema} from './use-movie-schema';

describe('useMovie', () => {
    test('Fetch short movie data', async () => {
        const shortMovieDataResponse: MovieShortDataResponseType = await fetchMovieShortData();
        const ajv = new Ajv();
        const modelJsonSchemaValidate = ajv.compile<MovieShortDataResponseType>(movieShortDataResponseSchema);
        const isValidSchema = modelJsonSchemaValidate(shortMovieDataResponse);

        assert.equal(isValidSchema, true, 'wrong response for short movie data');
    });

    test('Fetch additional movie data', async () => {
        const additionalMovieData = await fetchMovieAdditionalData(1999, 'The Phantom Menace');
        const ajv = new Ajv();
        const modelJsonSchemaValidate = ajv.compile<MovieAdditionalDataType>(movieAdditionalDataSchema);
        const isValidSchema = modelJsonSchemaValidate(additionalMovieData);

        assert.equal(isValidSchema, true, 'wrong response for additional movie data');
    });
});
