/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
// import React from 'react';
// import Enzyme, { shallow, mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import renderer from 'react-test-renderer';
// import Counter from '../../../components/counter.js'

import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Counter from '../../../components/counter.js';


import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe('<Counter/>', () => {
  it('exists at the start of our application', () => {
    let app = shallow(<Counter />);
    expect(app.find('h3').exists()).toBeTruthy();
  });

  it('changes the state on click', ()=> {
    let app = mount(<Counter />);
    let button = app.find('.one');
    button.simulate('click');
    expect(app.state('ctr')).toBeTruthy();
    // expect(app.find('span').text()).toContain('false');
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});