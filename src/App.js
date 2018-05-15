import React, { Component } from 'react';
import './App.css';
import SwimLane from './components/swimlane/swimlane.js';
import AddItem from  './components/additem/additem';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    	lanes: [
    		[ 
    			{title: 'title0-0', note: 'note0-0'}, 
    			{title: 'title0-1', note: 'note0-1'}
    		],
    		[ 
    			{title: 'title1-0', note: 'note1-0'},
    			{title: 'title1-1', note: 'note1-1'}
    		],
    		[ 
    			{title: 'title2-0', note: 'note2-0'}, 
    			{title: 'title2-1', note: 'note2-1'}
    		],
    		[ 
    			{title: 'title3-0', note: 'note3-0'},
    			{title: 'title3-1', note: 'note3-1'}
    		],
    	],
    	addItemShow: false,
    	addLane: null
    }
    this.transferLanes = this.transferLanes.bind(this);
    this.addItemStart = this.addItemStart.bind(this);
    this.addItemCommit = this.addItemCommit.bind(this);

  }
  transferLanes( lane, itemIndex, desiredLane){
  	console.log( `transfering ${lane}-${itemIndex} to ${desiredLane}`);
  	if(desiredLane<0 || desiredLane>= this.state.lanes.length){
  		console.error('out of lane bounds');
  		return;
  	}
  	const newLaneData = this.state.lanes.slice();
  	const movingItem = newLaneData[lane].splice(itemIndex, 1)[0];
  	newLaneData[desiredLane].push( movingItem );
  	this.setState( { lanes: newLaneData });
  }
  addItemStart( intendedLane ){
  	this.setState({
  		addItemShow: true,
  		addLane: intendedLane
  	})
  }
  addItemCommit( title, note, lane ){
  	console.log(`title: ${title}, note: ${note}, lane: ${lane}`);
  	const task = {
  		title, note
  	}
	const lanes = this.state.lanes.slice();
	lanes[ lane ].push(task);
	this.setState( { 
		lanes,
		addItemShow: false
	});
  }
  createLanes(){
    return this.state.lanes.map( (lane, index) => <SwimLane addCommitCallback={this.addItemCommit}  addStartCallback={this.addItemStart} transferLaneCallback={this.transferLanes} laneData={lane} key={index} lane={index}/> );
  }
  render() {

    return (
      <div className="App">
      	{ this.createLanes() }
      	{ this.state.addItemShow ? <AddItem lane={this.state.addLane} addHandler={this.addItemCommit}/> : ''}
      </div>
    );
  }
}

export default App;










