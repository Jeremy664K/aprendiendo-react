import { useRef, useState, useMemo, useCallback } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search, sort, error }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const previusSearch = useRef(search);

    const getMovies = useCallback(async ({ search }) => {
        if (search === previusSearch.current) return;

        setLoading(true);
        previusSearch.current = search;

        const newMovies = await searchMovies({ search, error });
        setMovies(newMovies);

        setLoading(false);
    }, []);

    const sortedMovies = useMemo(() => {
        return sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies;
    }, [sort, movies]);

    return { movies: sortedMovies, loading, getMovies };
}
