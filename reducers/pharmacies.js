import {
    FETCH_PHARMACIES_REQUEST,
    FETCH_PHARMACIES_FAILURE,
    FETCH_PHARMACIES_SUCCESS
} from "../actions/pharmacie";

const initialState = {
    pharmacies: []
};

function pharmacie(state = initialState, action) {
    switch (action.type) {
        case FETCH_PHARMACIES_REQUEST:
            return {...state, loading: true};
        case FETCH_PHARMACIES_SUCCESS:
            return {
                ...state,
                pharmacies: action.payload.pharmacies,
                name: action.payload.name
            };
        case FETCH_PHARMACIES_FAILURE:
            return {...state, error: action.payload, loading: false };

        default:
            return state;
    }
}

export default pharmacie

