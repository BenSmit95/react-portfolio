import React from 'react';
import { shallow } from 'enzyme';
import IntroductionPage from '../../components/IntroductionPage';

test('Should render IntroductionPage component correctly', () => {
    const wrapper = shallow(<IntroductionPage />);
    expect(wrapper).toMatchSnapshot();
});