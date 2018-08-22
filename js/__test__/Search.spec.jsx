import React from 'react';
import { shallow } from 'enzyme';
import preload from '../../data.json';
import Search from '../Search';
import ShowCard from '../ShowCard';

// console.log(process.env.NODE_ENV); // who knew? jest sets a NODE_ENV variable

test('Search renders correctly', () => {
    const component = shallow(<Search />);
    expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows', () => {
    const component = shallow(<Search />);
    expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

xtest('Search should render correct amount of shows', () => {

});