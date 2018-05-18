import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FilmListItem from './FilmListItem';
import { fetchFilms, fetchFilmById } from '../../actions/actions';
import './_film-list.css';

@connect(state => ({
    films: state.films,
}))
export default class FilmList extends Component {

    componentWillMount() {
        const { dispatch } = this.props;
        bindActionCreators(fetchFilms, dispatch)();
    }

    selectFilm = (id) => {
        const { dispatch } = this.props;
        bindActionCreators(fetchFilmById, dispatch, id);
    }

    renderFilms = () => {
        const {films} = this.props;
        return films.map(film => (
            <FilmListItem
                title={film.name}
                date={film.date}
                genre={film.genre}
                setActiveFilm={() => this.selectFilm(film.id)}
            />
        ));
        // for (let i = 0; i < 23; i++) {
        //     const name = `${MOCK_FILM.name} ${i}`;
        //     const date = MOCK_FILM.date + i;
        //     const genre = `${MOCK_FILM.genre} ${i}`;
        //     const timeline = MOCK_FILM.timeline + i;
        //     const film = {name, date, genre, timeline, description: MOCK_FILM.description};
        //
        //     content.push(
        //         <FilmListItem title={name} date={date}
        //                       genre={genre}
        //                       setActiveFilm={() => setActiveFilm(film)}/>
        //     );
        // }
        // return content;
    }


    render() {
        return (
            <div className={"film-list"}>
                {this.renderFilms()}
            </div>
        );
    }
}
