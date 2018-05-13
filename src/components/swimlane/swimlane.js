import React, { Component } from 'react';
import './swimlane.css';
import SwimItem from '../swimitem/swimitem';


class SwimLane extends Component{
	constructor(props){
		super(props);
		console.log(props);
		this.handleAddItem = this.handleAddItem.bind(this);
	}
	createLaneItems(){
		return this.props.laneData.map( (itemData, index)=> <SwimItem transferCallback={this.props.transferLaneCallback} itemIndex={index} laneIndex={this.props.lane} key={index} data={itemData} />);
	}
	handleAddItem(){
		this.props.addStartCallback( this.props.lane );
	}
	render(){
		return (
			<div className="swimLane">
				{ this.createLaneItems() }
				<button onClick={ this.handleAddItem } className="add">+</button>
			</div>
		)
	}
}

export default SwimLane;