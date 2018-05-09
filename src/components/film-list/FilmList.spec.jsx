import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import FilmList from './FilmList';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('FilmList', () => {

    it('renders without crashing', () => {
        shallow(<FilmList/>);
    });

    it('it should render the expected HTML', () => {
        expect(
            mount(<FilmList/>).html()
        ).toMatchSnapshot();
    });
});