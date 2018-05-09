import React from 'react';
import {shallow, configure, mount} from 'enzyme';
import Search from './Search';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Search', () => {
    it('renders without crashing', () => {
        shallow(<Search/>);
    });


    it('it should render the expected HTML', () => {
        expect(
            mount(<Search/>).html()
        ).toMatchSnapshot();
    });

    it('it should not call mock function', () => {
        const reset = jest.fn();
        const wrapper = mount(<Search resetActiveFilm={reset}/>);

        expect(reset).not.toBeCalled();
    });


    it('it should not call mock function', () => {
        const reset = jest.fn();
        const wrapper = mount(<Search resetActiveFilm={reset}/>);

        wrapper.find('div.search-button').simulate('click');
        expect(reset).toBeCalled();
    });
});