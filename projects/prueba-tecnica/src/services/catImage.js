export const CATAAS_URL = "https://cataas.com";

export const getImageUrlFact = (firstWord) => {
    return fetch(`${CATAAS_URL}/cat/says/${firstWord}?json=true`)
        .then((res) => res.json())
        .then(({ url }) => `${CATAAS_URL}${url}`);
};
