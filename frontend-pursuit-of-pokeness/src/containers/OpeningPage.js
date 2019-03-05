import React, { Component } from 'react'

import { Button, Form, Grid } from 'semantic-ui-react';
import '../App.css'

class OpeningPage extends Component {
	constructor() {
		super()

		this.state = {
			whichForm: 'b'
		}
	}


	handleShow = (event) => {
		event.preventDefault()
		this.setState({
			whichForm: 'l'
		})
		event.target.reset()
		this.props.handleSignup(event)
	}

	render() {


		const signup = 
			<Form
			id='login'
			onSubmit={(event) => this.handleShow(event)}>
			<h1 id='title'>THE PURSUIT OF POKENESS</h1>
			<Form.Field>
				<input
					placeholder='Name'
					name='newName'
					onChange={(event) => this.props.handleChange(event)} />
			</Form.Field>
			
			<Form.Field>
				<input
					placeholder='Image URL'
					name='newImage'
					onChange={(event) => this.props.handleChange(event)} />
			</Form.Field>
			
			<Form.Field>
				<input
					placeholder='Password'
					name='newPassword'
					onChange={(event) => this.props.handleChange(event)} />
			</Form.Field>
		
			<Button
				id='submit-btn'
				type='submit'>
				Submit
			</Button>
		
			</Form>
		
		const login = 
		<Form
		id='login'
		onSubmit={this.props.handleLogin}>
		<h1 id='title'>THE PURSUIT OF POKENESS</h1>
		<Form.Field>
			<input
				placeholder='Name'
				name='name'
				onChange={(event) => this.props.handleChange(event)} />
		</Form.Field>
		
		<Form.Field>
			<input
				placeholder='Password'
				name='password'
				type='password'
				onChange={(event) => this.props.handleChange(event)} />
		</Form.Field>
	
		<Button
			id='submit-btn'
			type='submit'>
			Submit
		</Button>
	
		</Form>
		

		const buttons = 
			<div id='buttons'>
				<Button
					id='login-btn'
					color='blue'
					onClick={() => this.setState({whichForm: 'l'})}>
					Login
				</Button>

				<Button
					id='signup-btn'
					color='orange'
					onClick={() => this.setState({whichForm: 's'})}>
					Signup
				</Button>
			</div>

		
		let whichForm;
		
		if (this.state.whichForm === 'b') {
			whichForm = buttons
		} else if (this.state.whichForm === 'l') {
			whichForm = login
		} else if (this.state.whichForm === 's') {
			whichForm = signup
		}
 		
		return (
			<Grid id='open-page'>
				{whichForm}
			</Grid>
		)
	}
}

export default OpeningPage;