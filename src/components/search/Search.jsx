import React from 'react';
import './_search.css';

const Search = ({resetActiveFilm}) => (
            <div className="search">
                <span className="search__title">FIND YOUR MOVIE</span>
                <input type="text" className="search__input"/>
                <div className="search__options">
                    <div>
                        <span className="search__options_title">SEARCH BY</span>
                        <div className="search__options_button">TITLE</div>
                        <div className="search__options_button">GENRE</div>
                    </div>
                    <div
                        onClick={resetActiveFilm}
                        className="search-button">
                        SEARCH
                    </div>
                </div>
            </div>
        );

export default Search;