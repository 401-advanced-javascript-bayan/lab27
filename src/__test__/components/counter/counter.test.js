/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Counter from '../../../components/counter.js'
Enzyme.configure({ adapter: new Adapter() });
describe('Testing our Counter component', () => {
    it('exists at the start of the app', () => {
        let app = shallow(<Counter />);
        expect(app.find('h3').exists()).toBeTruthy();
    })
    it('Counter renders', () => {
        let app = mount(<Counter />);
        let button = app.find('button');
        expect(button).toBeDefined();
        expect(app.state('ctr')).toBe(0);
    });
      
});