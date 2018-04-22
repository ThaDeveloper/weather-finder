import React from 'react';
import { configure,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import ReactDOM from 'react-dom';
import Weather from '../components/Weather';


configure({ adapter: new Adapter() });

describe('<Weather />', () =>{
    let city;
    let country;
    beforeEach(() => {
        city = "Paris";
        country = "FR";
   });

    it('renders a div', () => {
    const div = shallow(<Weather />);
    expect(div.find('div.weather__info')).to.have.length(1);
    });
    
    it('renders spans', () => {
        const spans = shallow(<Weather city={city}
            country={country} />);
        expect(spans.find('span.weather__value')).to.have.length(1);
    });
});
  