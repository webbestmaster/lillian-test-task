import {MovieType} from '../../hook/use-movie/use-movie-type';
import {Locale} from '../../provider/locale/locale-context';

import {MovieItem} from './movie-item/movie-item';
import movieTableStyle from './movie-table.scss';

type MovieListPropsType = {
    readonly activeMovieId: number;
    readonly movieList: Array<MovieType>;
    readonly setActiveMovieId: (activeMovieId: number) => void;
};

export function MovieTable(props: MovieListPropsType): JSX.Element {
    const {movieList, setActiveMovieId, activeMovieId} = props;

    if (movieList.length === 0) {
        return (
            <div className={movieTableStyle.movie_table}>
                <p className={movieTableStyle.movie_table__message}>
                    <Locale stringKey="MOVIE_LIST__NOTING_TO_SHOW" />
                </p>
            </div>
        );
    }

    return (
        <table className={movieTableStyle.movie_table}>
            <tbody>
                {movieList.map((movie: MovieType): JSX.Element => {
                    return (
                        <MovieItem
                            isActive={movie.shortData.episode_id === activeMovieId}
                            key={movie.shortData.title}
                            movie={movie}
                            setActiveMovieId={setActiveMovieId}
                        />
                    );
                })}
            </tbody>
        </table>
    );
}
