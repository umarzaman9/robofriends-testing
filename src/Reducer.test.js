import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants';
import * as reducers from './reducers';

describe('Reducers', () => {
  const initialStateSearch ={
    searchField: ''
  }
  it('return initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({searchField: ''})
  })

   it('handle CHANGE_SEARCHFIELD', () => {
    expect(reducers.searchRobots(initialStateSearch, {
      type: CHANGE_SEARCHFIELD,
      payload: 'abc'
    })).toEqual({
      searchField: 'abc'
    })
  })
})

describe('requestRObots', () => {
  const initialStateRobots = {
      robots: [],
      isPending: false
    }

    it('return initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
    })

    it('handle REQUEST_ROBOTS_PENDING', () => {
      expect(reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING
      })).toEqual({
        robots: [],
        isPending: true
      })
    })

     it('handle REQUEST_ROBOTS_SUCCESS', () => {
      expect(reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [{
          id: '123',
          name: 'test',
          email: 'test@gmail.com'
        }]
      })).toEqual({
        robots: [{
          id: '123',
          name: 'test',
          email: 'test@gmail.com'
        }],
        isPending: false
      })
    })

       it('handle REQUEST_ROBOTS_FAILED', () => {
      expect(reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: 'NOOOOOO'
      })).toEqual({
        error: 'NOOOOOO',
        robots: [],
        isPending: false
      })
    })
})





