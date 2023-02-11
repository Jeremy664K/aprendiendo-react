import { useCatFact } from "./hooks/useCatFact";
import { useCatImage } from "./hooks/useCatImage";

import "./app.css";

export function App() {
    const { fact, refreshFact } = useCatFact();
    const { imageUrl, refreshImage } = useCatImage({ fact });

    return (
        <main className="Main">
            <section className="CatApp">
                <h1 className="CatApp-title">CatApp</h1>
                {fact && (
                    <p className="CatApp-fact" data-testid="fact">
                        {fact}
                    </p>
                )}
                {imageUrl && <img className="CatApp-img" src={imageUrl} alt={`Image extracted using the first word for ${fact}`} data-testid="image" />}
                <button className="CatApp-btn" onClick={refreshFact}>
                    Get new fact
                </button>
                <button className="CatApp-btn" onClick={refreshImage}>
                    Get new image
                </button>
            </section>
        </main>
    );
}

export default App;
