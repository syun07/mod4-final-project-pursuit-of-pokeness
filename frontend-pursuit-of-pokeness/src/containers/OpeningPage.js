import React, { Component } from 'react'

import { Segment, Button, Form, Grid } from 'semantic-ui-react';
import '../App.css'

const OpeningPage = (props) => {

	return (
		<Grid id='open-page'>
			<Form
				id='login'
				onSubmit={props.submitHandler}>
				<h1 id='title'>THE PURSUIT OF POKENESS</h1>
				<Form.Field>
					<label>Name</label>
					<input 
						placeholder='Name'
						name='name' />
				</Form.Field>
				
				<Form.Field>
					<label>Password</label>
					<input 
						placeholder='Password'
						name='password' />
				</Form.Field>
			
				<Button 
					id='submit-btn' 
					type='submit'>
					Submit
				</Button>
			
			</Form>
		</Grid>
	)
}

export default OpeningPage;