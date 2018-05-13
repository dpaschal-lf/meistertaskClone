import React, { Component } from 'react';
import './swimlane.css';
import SwimItem from '../swimitem/swimitem';


class SwimLane extends Component{
	constructor(props){
		super(props);
		console.log(props);
	}
	createLaneItems(){
		return this.props.laneData.map( (itemData, index)=> <SwimItem transferCallback={this.props.transferLaneCallback} itemIndex={index} laneIndex={this.props.lane} key={index} data={itemData} />);
	}
	render(){
		return (
			<div className="swimLane">
				{ this.createLaneItems() }
			</div>
		)
	}
}

export default SwimLane;