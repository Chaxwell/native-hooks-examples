import {createStore} from "redux";

// Fichier Constants/action-types.js
const UNE_ACTION = 'UNE_ACTION';

// Fichier Actions/actions.js
const uneAction = (payload) => {
    return {type: UNE_ACTION, payload};
};

// Fichier initialState.js
const initialState = {
    compteur: 0,
};

// Fichier Reducers/rootReducer.js
const rootReducer = (state = initialState, action) => {
    if (action.type === UNE_ACTION) {
        return {
            ...state,
            compteur: state.compteur + 1,
        };
    }

    return state;
};

// Fichier store.js
const store = createStore(rootReducer);
