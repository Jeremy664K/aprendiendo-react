import { useState, useEffect } from "react";
import { getImageUrlFact } from "../services/catImage";

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState();

    const refreshImage = () => {
        let isApiSubscribed = true;
        if (!fact || !isApiSubscribed) return;

        const firstWord = fact.split(" ")[0];
        getImageUrlFact(firstWord).then(setImageUrl);

        return () => (isApiSubscribed = false);
    };

    useEffect(() => {
        refreshImage();
        return () => {};
    }, [fact]);

    return { imageUrl, refreshImage };
}
