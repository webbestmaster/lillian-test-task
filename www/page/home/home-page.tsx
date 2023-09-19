import {useMemo, useState} from 'react';

import {Sort} from '../../layout/sort/sort';
import {Search} from '../../layout/search/search';
import {MovieTable} from '../../layout/movie-table/movie-table';
import {MovieInfo} from '../../layout/movie-info/movie-info';
import {useMovie} from '../../hook/use-movie/use-movie';
import {FetchStateEnum, MovieType} from '../../hook/use-movie/use-movie-type';
import {SortIdEnum} from '../../layout/sort/sort-type';
import {getSortedMovieList} from '../../hook/use-movie/use-movie-helper';
import {Locale} from '../../provider/locale/locale-context';
import {SwitchLanguage} from '../../layout/switch-language/switch-language';

import homePageStyle from './home-page.scss';

export function HomePage(): JSX.Element {
    const [searchValue, setSearchValue] = useState<string>('');
    const {movieList: fullMovieList, fetchState: movieFetchState} = useMovie();
    const [activeMovieId, setActiveMovieId] = useState<number>(0);
    const activeMovie: MovieType | void = fullMovieList.find(
        (movie: MovieType): boolean => movie.shortData.episode_id === activeMovieId
    );

    const [isSortAsc, setIsSortAsc] = useState<boolean>(true);
    const [sortId, setSortId] = useState<SortIdEnum>(SortIdEnum.episode);

    const movieList: Array<MovieType> = useMemo((): Array<MovieType> => {
        const filteredMovieList: Array<MovieType> = fullMovieList.filter<MovieType>(
            (movieToSort: MovieType): movieToSort is MovieType => {
                return movieToSort.shortData.title.toLowerCase().includes(searchValue.trim().toLowerCase());
            }
        );

        return getSortedMovieList(filteredMovieList, sortId, isSortAsc);
    }, [fullMovieList, searchValue, sortId, isSortAsc]);

    return (
        <div className={homePageStyle.home_page}>
            <div className={homePageStyle.home_page__top_panel}>
                <Sort isSortAsc={isSortAsc} setIsSortAsc={setIsSortAsc} setSortId={setSortId} sortId={sortId} />
                <Search className={homePageStyle.home_page__search} setSearchValue={setSearchValue} />
                <SwitchLanguage />
            </div>

            {movieFetchState === FetchStateEnum.done ? (
                <main className={homePageStyle.home_page__main}>
                    <div className={homePageStyle.home_page__table}>
                        <MovieTable
                            activeMovieId={activeMovieId}
                            movieList={movieList}
                            setActiveMovieId={setActiveMovieId}
                        />
                    </div>
                    <MovieInfo movie={activeMovie} />
                </main>
            ) : null}

            {movieFetchState === FetchStateEnum.inProgress ? (
                <p className={homePageStyle.home_page__message}>
                    <Locale stringKey="MESSAGE__LOADING" />
                </p>
            ) : null}

            {movieFetchState === FetchStateEnum.error ? (
                <p className={homePageStyle.home_page__message}>
                    <Locale stringKey="MESSAGE__LOADING_ERROR" />
                </p>
            ) : null}
        </div>
    );
}
