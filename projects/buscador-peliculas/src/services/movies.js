const API_URL = "https://www.omdbapi.com/";
const API_KEY = import.meta.env.VITE_API_KEY;

export const searchMovies = async ({ search, error }) => {
    if (!search || error) return null;

    try {
        const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${search}`);
        const json = await response.json();

        const movies = json.Search;

        return movies?.map((movie) => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }));
    } catch (err) {
        throw new Error("Error searching movies");
    }
};
