import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Page from './Page';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('Page', () => {

    it('renders without crashing', () => {
        shallow(<Page/>);
    });

    it('it should render the expected HTML', () => {
        expect(
            mount(<Page/>).html()
        ).toMatchSnapshot();
    });

    it('it should call FilmDescription', () => {
         const wrapper = mount(<Page/>);
        wrapper.find('div.film-list__item').first().simulate('click');
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('it should call FilmDescription and hide it', () => {
        const wrapper = mount(<Page/>);
        wrapper.find('div.film-list__item').first().simulate('click');
        wrapper.find('div.search-button').first().simulate('click');

        expect(wrapper.html()).toMatchSnapshot();
    });


});