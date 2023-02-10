import { useEffect, useState } from "react";

import "./app.css";

const CAT_FACT_URL = "https://catfact.ninja/fact";
const CATAAS_URL = "https://cataas.com";

export function App() {
    const [fact, setFact] = useState();
    const [imageUrl, setImageUrl] = useState();

    /* RECUPERAR HECHO */
    useEffect(() => {
        fetch(CAT_FACT_URL)
            .then((res) => res.json())
            .then(({ fact }) => setFact(fact));
    }, []);

    /* RECUPERAR IMAGEN */
    useEffect(() => {
        if (!fact) return;
        const firstWord = fact.split(" ", 1);

        fetch(`${CATAAS_URL}/cat/says/${firstWord}?json=true`)
            .then((res) => res.json())
            .then(({ url }) => setImageUrl(url));
    }, [fact]);

    return (
        <main className="Main">
            <section className="CatApp">
                <h1 className="CatApp-title">CatApp</h1>
                {fact && <p className="CatApp-fact">{fact}</p>}
                {imageUrl && <img className="CatApp-img" src={`${CATAAS_URL}${imageUrl}`} alt={`Image extracted using the first word for ${fact}`} />}
            </section>
        </main>
    );
}

export default App;
