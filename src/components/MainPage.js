import React, { Component } from 'react';



import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import CounterButton from '../components/CounterButton'
import './MainPage.css';


class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

filterRobots = () => {
    return this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    })
}  
  render() {
    const { robots, onSearchChange, isPending } = this.props;
  
    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <CounterButton />
        <Scroll>
          { isPending ? <h1>Loading</h1> :
            <ErrorBoundry>
              <CardList robots={this.filterRobots} />
            </ErrorBoundry>
          }
        </Scroll>
      </div>
    );
  }
}
export default MainPage;
