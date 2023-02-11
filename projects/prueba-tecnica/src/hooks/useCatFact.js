import { useState, useEffect } from "react";
import { getRandomFact } from "../services/catFact";

export function useCatFact() {
    const [fact, setFact] = useState();

    const refreshFact = () => getRandomFact().then(setFact);
    useEffect(() => {
        let isApiSubscribed = true;
        if (isApiSubscribed) refreshFact();

        return () => (isApiSubscribed = false);
    }, []);

    return { fact, refreshFact };
}
