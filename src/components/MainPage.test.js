import React from 'react';
import {shallow} from 'enzyme';
import MainPage from './MainPage';

let wrapper; 
let wrapper2;
beforeEach(()=> {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: false
	}
	wrapper = shallow(<MainPage {...mockProps} />)
})

it('render MainPage without crashing', ()=> {
	expect(wrapper).toMatchSnapshot();
})

it('filter the robot now', () => {
	const mockProps2 = {
		onRequestRobots: jest.fn(),
		robots: [{
			id: 3,
			name: 'John',
			email: 'john@gmail.com'
		}],
		searchField: 'john',
		isPending: false
	}
	wrapper2 = shallow(<MainPage {...mockProps2} />)
	expect(wrapper2.instance().filterRobots()).toEqual([{
			id: 3,
			name: 'John',
			email: 'john@gmail.com'
		}])
})