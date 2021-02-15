import React, {useEffect, useState} from "react";
import {FilmList} from "../components/FilmList";
import {moviesService, genresService} from "../services";
import {useHistory} from "react-router-dom";
import {PaginationWrapper} from "./PaginationWrapper";
import {mergeMoviesWithGenres} from "./MergeMoviesWithGenres";

export const Home = () => {
    const history = useHistory();
    const [genresList, setGenresList] = useState([]);
    const [isLoading, setIsLoading] = useState(null);
    const [moviesData, setMoviesData] = useState(null);

    const fetchMovies = (params) => {
        try {
            return moviesService.getMovies(params);
        } catch (e) {
            console.error(e);
        }
    };

    const fetchGenres = async () => {
        try {
            const {genres} = await genresService.getGenres();
            return genres;
        } catch (e) {
            console.error(e);
        }
    }

    const fetchMoviesData = async () => {
        const requests = [fetchMovies(), fetchGenres()];
        try {
            setIsLoading(true);
            const [{results, ...rest}, genres] = await Promise.all(requests);
            setMoviesData({movies: mergeMoviesWithGenres(results, genres), ...rest});
            setGenresList(genres);
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchMoviesData()
    }, []);

    const renderLoadingIndicator = () => <div className='loading'> Loading...</div>;
    const onFilmClick = (film) => history.push(`/movie/${film.id}`);

    const handlePageChange = async (page) => {
        const {results, ...rest} = await fetchMovies({page});
        setMoviesData({
            movies: mergeMoviesWithGenres(results, genresList),
            ...rest
        })
    }

    return (
        <div>
            {isLoading || isLoading === null
                ? renderLoadingIndicator()
                : (
                    <PaginationWrapper
                        currentPage={moviesData.page}
                        totalPages={moviesData.total_pages}
                        onPrevClick={handlePageChange}
                        onNextClick={handlePageChange}
                        handleLastPage={handlePageChange}
                        handleFirstPage={handlePageChange}
                    >
                        <FilmList onFilmClick={onFilmClick}
                                  items={moviesData.movies}/>
                    </PaginationWrapper>
                )
            }
        </div>
    )
}
