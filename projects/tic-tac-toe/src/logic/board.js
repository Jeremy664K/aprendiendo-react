import { WINNER_STACK } from "./constants";

export const checkWinner = (boardToCheck) => {
    for (const stack of WINNER_STACK) {
        const [a, b, c] = stack;

        if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
            return boardToCheck[a];
        }
    }

    return null;
};

export const checkEndGame = (boardToCheck) => {
    return !boardToCheck.includes(null);
};
