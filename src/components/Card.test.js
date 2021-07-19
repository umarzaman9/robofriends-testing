import React from 'react';
import {shallow} from 'enzyme';
import Card from './Card';

 
it('Card Component', () => {
expect(shallow(<Card />)).toMatchSnapshot();	
})