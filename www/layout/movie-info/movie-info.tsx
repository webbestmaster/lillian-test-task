/* global document */

import {useEffect} from 'react';

import {Rating} from '../rating/rating';
import {Locale} from '../../provider/locale/locale-context';
import {ExternalRatingType, MovieType} from '../../hook/use-movie/use-movie-type';
import {numberToLatinNumber} from '../../util/number';

import movieInfoStyle from './movie-info.scss';

type MovieInfoPropsType = {
    readonly movie: MovieType | void;
};

export function MovieInfo(props: MovieInfoPropsType): JSX.Element {
    const {movie} = props;

    useEffect(() => {
        if (movie) {
            document.body.style.backgroundImage = `url(${movie.additionalData.Poster})`;
        }
    }, [movie]);

    if (!movie) {
        return (
            <section className={movieInfoStyle.movie_info}>
                <p className={movieInfoStyle.movie_info__message}>
                    <Locale stringKey="MOVIE_INFO__SELECT_MOVIE_FROM_THE_LIST" />
                </p>
            </section>
        );
    }

    const {title, episode_id: episodeId, opening_crawl: openingCrawl, director} = movie.shortData;
    const {Poster, Ratings} = movie.additionalData;

    return (
        <section className={movieInfoStyle.movie_info}>
            <h1 className={movieInfoStyle.movie_info__header}>
                <Locale
                    stringKey="MOVIE__EPISODE__LATIN_NUMBER"
                    valueMap={{latinNumber: numberToLatinNumber(episodeId)}}
                />
                {` - ${title}`}
            </h1>
            <div className={movieInfoStyle.movie_info__preview}>
                <img alt={title} className={movieInfoStyle.movie_info__poster} src={Poster} />
                <p className={movieInfoStyle.movie_info__description}>{openingCrawl}</p>
            </div>
            <p className={movieInfoStyle.movie_info__credits}>
                <Locale stringKey="MOVIE_INFO__DIRECTED_BY" valueMap={{name: director}} />
            </p>
            <div className={movieInfoStyle.movie_info__average_rating}>
                <p className={movieInfoStyle.movie_info__average_rating_label}>
                    <Locale stringKey="MOVIE_INFO__AVERAGE_RATING" />
                </p>
                <Rating
                    className={movieInfoStyle.movie_info__average_rating_stars}
                    ratingPercent={movie.averageRating}
                    starSize={26}
                />
            </div>
            <ul className={movieInfoStyle.movie_info__other_rating_list}>
                {Ratings.map<JSX.Element>((rating: ExternalRatingType): JSX.Element => {
                    return (
                        <li className={movieInfoStyle.movie_info__rating_item} key={rating.Source}>
                            {rating.Source}:&nbsp;{rating.Value}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
