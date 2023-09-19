import {Rating} from '../../rating/rating';
import {MovieType} from '../../../hook/use-movie/use-movie-type';
import {Locale} from '../../../provider/locale/locale-context';
import {numberToLatinNumber} from '../../../util/number';

import movieItemStyle from './movie-item.scss';

type MovieItemPropsType = {
    readonly isActive: boolean;
    readonly movie: MovieType;
    readonly setActiveMovieId: (activeMovieId: number) => void;
};

export function MovieItem(props: MovieItemPropsType): JSX.Element {
    const {movie, setActiveMovieId, isActive} = props;
    const {episode_id: episodeId, release_date: releaseDate, title} = movie.shortData;

    return (
        <tr
            className={`${movieItemStyle.movie_item} ${isActive ? movieItemStyle.movie_item__active : ''}`.trim()}
            onClick={() => setActiveMovieId(episodeId)}
        >
            <td className={movieItemStyle.movie_item__cell__episode}>
                <p className={movieItemStyle.movie_item__text}>
                    <Locale stringKey="MOVIE__EPISODE__NUMBER" valueMap={{number: episodeId}} />
                </p>
            </td>
            <td className={movieItemStyle.movie_item__cell}>
                <p className={movieItemStyle.movie_item__text}>
                    <Locale
                        stringKey="MOVIE__EPISODE__LATIN_NUMBER"
                        valueMap={{latinNumber: numberToLatinNumber(episodeId)}}
                    />
                    {` - ${title}`}
                </p>
            </td>
            <td className={movieItemStyle.movie_item__cell}>
                <Rating
                    className={movieItemStyle.movie_item__rating}
                    ratingPercent={movie.averageRating}
                    starSize={22}
                />
            </td>
            <td className={movieItemStyle.movie_item__cell}>
                <time className={movieItemStyle.movie_item__text} dateTime={releaseDate}>
                    {releaseDate}
                </time>
            </td>
        </tr>
    );
}
