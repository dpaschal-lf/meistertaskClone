import React, { Component } from 'react';
import './additem.css';

class AddItem extends Component{
	constructor(props){
		super(props);
		this.state = {
			title: '',
			note: ''
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleAddClick = this.handleAddClick.bind(this);
	}
	handleInputChange(event){
		const element = event.target;
		const availableElements = ['title', 'note'];
		const elementName = element.getAttribute('name');
		if(availableElements.indexOf( elementName )!==-1){
			const value = element.value;
			this.setState({
				[elementName]: value
			})
		}
	}
	handleAddClick(){
		this.props.addHandler( this.state.title, this.state.note, this.props.lane);
	}
	render(){
		return(
			<div className="addItem">
				<div className="addItemBody">
					<input onKeyUp={ (event)=>{ this.handleInputChange(event)} } name="title" type="text" placeholder="please add a title" />
					<input onKeyUp={ (event)=>{ this.handleInputChange(event)} } name="note" type="text" placeholder="please add a note" />
					<button onClick={ this.handleAddClick } className="addButton"> add item </button>
				</div>
			</div>
		);
	}
}

export default AddItem;