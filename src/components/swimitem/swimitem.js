import React, { Component } from 'react';
import './swimitem.css';

class SwimItem extends Component{
	constructor(props){
		super(props);
		console.log('item: ', props);
		this.transferItem = this.transferItem.bind(this);
	}
	transferItem(direction){
		const nextLane = this.props.laneIndex+direction;
		this.props.transferCallback(this.props.laneIndex,this.props.itemIndex, nextLane);
	}
	render(){
		return(
			<div className="swimItem">
      			<div className="title">{this.props.data.title}</div>
      			<div className="note">{this.props.data.note}</div>
      			<div className="itemNav">
      				<nav onClick={()=> {this.transferItem(-1)}}>&lt;</nav>
      				<nav onClick={()=> {this.transferItem(1)}}>&gt;</nav>
      			</div>
			</div>
		);
	}
}

export default SwimItem;