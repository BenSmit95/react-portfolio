import React from 'react';
import { shallow } from 'enzyme';
import SkillsPage from '../../components/SkillsPage';

test('Should render SkillsPage component correctly', () => {
    const wrapper = shallow(<SkillsPage />);
    expect(wrapper).toMatchSnapshot();
});