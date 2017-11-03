import React from 'react';
import { shallow } from 'enzyme';
import ProjectsPage from '../../components/ProjectsPage';

test('Should render ProjctsPage component correctly', () => {
    const wrapper = shallow(<ProjectsPage />);
    expect(wrapper).toMatchSnapshot();
});