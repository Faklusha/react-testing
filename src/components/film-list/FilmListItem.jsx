import React from 'react';

const FilmListItem = ({title, date, genre, setActiveFilm})=> (
            <div
                className="film-list__item"
                onClick={setActiveFilm}
            >
                <div className="film-list__item_picture"/>
                <div className="film-list__item_info">
                    <span className="item__title">{title}</span>
                    <span className="item__date">{date}</span>
                    <span className="item__category">{genre}</span>
                </div>
            </div>
        );

export default FilmListItem;