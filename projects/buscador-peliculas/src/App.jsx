import Header from "./components/Header";
import Movies from "./components/Movies";

import { useMovies } from "./hooks/useMovies";

import "./app.css";

export function App() {
    const { movies } = useMovies();

    return (
        <>
            <Header />
            <main className="Main">
                <Movies movies={movies} />
            </main>
        </>
    );
}

export default App;
