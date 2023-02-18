import { getStorage } from "../storage/local";

export const initialState = getStorage({ key: "cart", isJSON: true }) || [];

export const CART_ACTION_TYPES = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    CLEAR_CART: "CLEAR_CART"
};

export const reducer = (state, action) => {
    const { type: actionType, payload: actionPayLoad } = action;

    switch (actionType) {
        case CART_ACTION_TYPES.ADD_TO_CART: {
            const { id } = actionPayLoad;
            const productIndexInCart = state.findIndex((item) => item.id === id);

            if (productIndexInCart >= 0) {
                const newState = structuredClone(state);
                newState[productIndexInCart].quantity += 1;

                return newState;
            }

            return [
                ...state,
                {
                    ...actionPayLoad, // product
                    quantity: 1
                }
            ];
        }

        case CART_ACTION_TYPES.REMOVE_FROM_CART: {
            const { id } = actionPayLoad;
            return state.filter((item) => item.id !== id);
        }

        case CART_ACTION_TYPES.CLEAR_CART: {
            return [];
        }
    }
};
