import React from 'react';
import {shallow} from 'enzyme';
import CardList from './CardList';

 
it('Card Component', () => {
	const mockRobots = [
		{
			id: 1,
			name: 'John Snow',
			username: 'johnJohn',
			email: 'john@gmail.com'
		}
	]
	expect(shallow(<CardList robots = {mockRobots} />)).toMatchSnapshot();	
})