export function ListOfMovies({ movies }) {
    return (
        <ul className="Movies-content">
            {movies.map(({ id, title, year, poster }) => {
                return (
                    <li key={id}>
                        <article className="Movies-item">
                            <h2 className="Movies-title">{title}</h2>
                            <p className="Movies-year">{year}</p>
                            <img className="Movies-poster" src={poster} alt={title} loading="lazy" decoding="async" />
                        </article>
                    </li>
                );
            })}
        </ul>
    );
}

export function ErrorMovieResults() {
    return <p>No se encontraron películas</p>;
}

export function Movies({ movies }) {
    const hasMovies = movies?.length > 0;
    return <section className="Main-movies Movies">{hasMovies ? <ListOfMovies movies={movies} /> : <ErrorMovieResults />}</section>;
}

export default Movies;
