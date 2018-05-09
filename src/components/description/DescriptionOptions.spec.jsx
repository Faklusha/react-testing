import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import DescriptionOptions from './DescriptionOptions';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('DescriptionOptions', () => {

    it('renders without crashing', () => {
        shallow(<DescriptionOptions/>);
    });

    it('it should render the expected HTML', () => {
        expect(
            mount(<DescriptionOptions/>).html()
        ).toMatchSnapshot();
    });
});