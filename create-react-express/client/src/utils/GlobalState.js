import React, { createContext, useReducer, useContext } from "react";
import {
    SET_CURRENT_USER,
    CLEAR_CURRENT_USER,
    LOADING
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;


const reducer = (state, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.user,
                loading: false
            };
        case CLEAR_CURRENT_USER:
            return {
                ...state,
                currentUser: false,
                loading: false
            };
        case LOADING:
            return {
                ...state,
                loading: true
            };

        default:
            return state;
    }
};

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        currentUser: null,
        loading: false
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
