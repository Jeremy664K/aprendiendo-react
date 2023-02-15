import { useRef, useState, useCallback } from "react";

import Header from "./components/Header";
import { FormHeader } from "./components/Header";
import Movies from "./components/Movies";

import { useSearch } from "./hooks/useSearch";
import { useMovies } from "./hooks/useMovies";

import debounce from "just-debounce-it";

import "./app.css";

export function App() {
    const [sort, setSort] = useState(false);
    const isFirstRender = useRef(true);

    const { search, error, updateSearch } = useSearch();
    const { movies, loading, getMovies } = useMovies({ search, sort, error });

    const debouncedGetMovies = useCallback(
        debounce(({ search }) => {
            getMovies({ search });
            isFirstRender.current = false;
        }, 500),
        []
    );

    const handleSort = () => setSort(!sort);

    const handleSubmit = (e) => {
        e.preventDefault();
        getMovies({ search });

        isFirstRender.current = false;
    };

    const handleChange = (e) => {
        const newSearch = e.target.value;
        debouncedGetMovies({ search: newSearch });

        updateSearch(newSearch);
    };

    return (
        <>
            <Header>
                <FormHeader search={search} error={error} handleSubmit={handleSubmit} handleChange={handleChange} handleSort={handleSort} sort={structuredClone(sort)} />
            </Header>
            <main className="Main">{loading ? <p>Cargando...</p> : <Movies movies={movies} isFirstRender={isFirstRender.current} />}</main>
        </>
    );
}

export default App;
