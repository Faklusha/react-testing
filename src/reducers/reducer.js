import {ACTION_TYPES} from '../actions/actions-types';

const initialState = {
    films: [],
    selectedFilm: null
};

export default function Reducer(state = initialState, action) {
    switch (action.type) {

        case ACTION_TYPES.fetchFilms:
            // const newId = state.friends[state.friends.length-1] + 1;
            // return {
            //     friends: state.friends.concat(newId),
            //     friendsById: {
            //         ...state.friendsById,
            //         [newId]: {
            //             id: newId,
            //             name: action.name
            //         }
            //     }
            // }
            return state;
        case ACTION_TYPES.fetchFilmById:
            return state;

        case ACTION_TYPES.resetFilms:
            return state;

        case ACTION_TYPES.resetSelectedFilm:
            return state;

        default:
            return state;
    }
}