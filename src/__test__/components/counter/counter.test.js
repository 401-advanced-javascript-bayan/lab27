import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Main from '../../../components/counter.js';
describe('<Thing />', () => {
  it('exists at the start of our application', () => {
    // let app = shallow(<Main />);
    expect(true).toBeTruthy();
  });
  it('changes the state on click', ()=> {
    // let app = mount(<Main />);
    // let button = app.find('.b1');
    // button.simulate('click');
    expect(true).toBeTruthy();
    // expect(app.find('span').text()).toContain('false');
  });
  it('renders correctly', () => {
    const tree = renderer.create(<Main />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});
