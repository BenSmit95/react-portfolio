import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from '../../components/LandingPage';

test('Should render LandingPage component correctly', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper).toMatchSnapshot();
});