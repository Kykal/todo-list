import React, { useState } from 'react';


//Styled
import styled from 'styled-components';

const Label = styled.label`
	font-size: x-large;
`;


const ActionsContainer = styled.div`
	padding-top: 1em;
`;


const Actions = styled.div`
	display: flex;
	gap: 1em;
`;

const Input = styled.input`
	background-color: var(--black-4);
	border: none;
	outline: none;
	font-size: large;
	flex-grow: 1;
	color: var(--white);
	padding: 0.75em;
	border-radius: 0.25em;

	@media ( max-width: 720px ) {
		width: 100%;
	}
`;

const Button = styled.button`
	width: 30%;
	min-width: 30%;
	border: none;
	outline: none;
	background-color: var(--black-4);
	color: var(--white);
	font-weight: bold;
	font-size: medium;
	cursor: pointer;
	border-radius: 0.25em;

	&:hover {
		background-color: var(--black-3);
	}
	&:active {
		background-color: var(--black-1);
	}
`;


//Main component content
const Form = (props) => {

	//Component render
	return (
		<form onSubmit={props.onSubmit} >
			<Label htmlFor="task-input">
				<strong>Task label</strong>
			</Label>
			<ActionsContainer>
				<Actions>
					<Input
						id="task-input"
						type="text"

						placeholder="Clean dining room table"
						autoComplete="off"

						value={props.inputValue}
						onChange={props.onInputChange}
					/>
					<Button type="submit" >
						ADD TASK
					</Button>
				</Actions>
			</ActionsContainer>
		</form>
	);
};


export default Form; //Export main component
