import React from 'react';
import { configure,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import ReactDOM from 'react-dom';
import Titles from '../components/Titles';


configure({ adapter: new Adapter() });

describe('<Titles />', () =>{
  it('renders a div', () => {
    const div = shallow(<Titles />);
    expect(div.find('div')).to.have.length(1);// chai 'expect'
    //  for default react expect use expect(title.find('h1').length).toEqual(1)
    });
});
  