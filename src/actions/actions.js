import {ACTION_TYPES} from './actions-types';

export function fetchFilms() {
    console.log('fetch_films');
    return fetch('http://react-cdp-api.herokuapp.com/movies', {
        method: 'GET', // or 'PUT'
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then((response) => {
        console.log(response);
    })
        .catch((error) => {
            console.error(error);
        });
    // return {
    //     type: ACTION_TYPES.fetchFilms
    // };
};

export function fetchFilmById(id) {
    console.log('fetch_film');

    return {
        type: ACTION_TYPES.fetchFilmById,
        id
    };
}

export function resetFilms() {
    console.log('reset_all');

    return {
        type: ACTION_TYPES.resetFilms,
    };
}

export function resetSelectedFilm(dispatch, ss, id) {
    console.log('reset_film');

    return {
        type: ACTION_TYPES.resetSelectedFilm,
        id
    };
}
