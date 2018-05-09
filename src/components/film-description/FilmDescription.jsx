import React from 'react';
import './_film-description.css';

const FilmDescription = ({activeFilm: {name, description, date, timeline, genre}}) => (
            <div className="description__block">
                <div className="description__block_picture"/>
                <div className="description__block_info">
                    <span className="info__title">{name}</span>
                    <span className="info__description">{genre}</span>
                    <div>
                        <span className="info__date">{date}</span>
                        <span className="info__timeline">{timeline}</span>
                    </div>
                    <span className="info__description">{description}</span>
                </div>
            </div>
        );

export default FilmDescription;