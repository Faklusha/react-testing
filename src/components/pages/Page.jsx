import React, {Component} from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import FilmDescription from '../film-description/FilmDescription';
import Search from '../search/Search';
import Description from '../description/Description'
import FilmList from '../film-list/FilmList';
import ErrorBoundary from '../error-boundary/ErrorBoundary';

import './_page.css';


export default class Page extends Component {
    state = {
        activeFilm: null
    };

    setActiveFilm = (film) => {
        this.setState({activeFilm: film});
    }

    resetActiveFilm = () => {
        this.setState({activeFilm: null});
    }

    render() {
        const {activeFilm} = this.state;

        return (
            <div className="page">
                <ErrorBoundary>
                    <Header isFilmSelected={!!activeFilm} resetActiveFilm={this.resetActiveFilm}/>
                    {activeFilm ? <FilmDescription activeFilm={activeFilm}/> :
                        <Search/>}
                    <Description/>
                    <FilmList setActiveFilm={this.setActiveFilm}/>
                    <Footer/>
                </ErrorBoundary>
            </div>
        );
    }
}
