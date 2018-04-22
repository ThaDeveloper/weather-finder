import React from 'react';
import { configure,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import ReactDOM from 'react-dom';
import Form from '../components/Form';

configure({ adapter: new Adapter() });

describe('<Form />', () =>{
  it('renders a form', () => {
    const form = shallow(<Form />);
    expect(form.find('form')).to.have.length(1);
    });
});
  