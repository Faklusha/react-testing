import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import FilmDescription from './FilmDescription';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('FilmDescription', () => {

    it('renders without crashing', () => {
        const activeFilm = {timeline: 'timeline', name: 'name', genre: 'genre', date:'date', description: 'description'};

        shallow(<FilmDescription activeFilm={activeFilm}/>);
    });

    it('it should render the expected HTML', () => {
        const activeFilm = {timeline: 'timeline', name: 'name', genre: 'genre', date:'date', description: 'description'};
        expect(
            mount(<FilmDescription activeFilm={activeFilm}/>).html()
        ).toMatchSnapshot();
    });
});