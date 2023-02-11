import { useState, useEffect } from "react";
import { getImageUrlFact } from "../services/catImage";

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState();

    const refreshImage = () => {
        if (!fact) return;

        const firstWord = fact.split(" ")[0];
        getImageUrlFact(firstWord).then(setImageUrl);
    };

    useEffect(refreshImage, [fact]);

    return { imageUrl, refreshImage };
}
