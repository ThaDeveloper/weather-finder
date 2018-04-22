import React from 'react';
import { configure,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import ReactDOM from 'react-dom';
import Weather from '../components/Weather';


configure({ adapter: new Adapter() });

describe('<Weather />', () =>{
  it('renders a div', () => {
    const div = shallow(<Weather />);
    expect(div.find('div')).to.have.length(1);
    });
});
  