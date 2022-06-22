import React, { useState } from 'react';


//MATERIAL DESIGN
//Components
import Paper		from './components/Paper';
import Form			from './components/Form';
import TasksList	from './components/TasksList/TasksList';


//Styled
import styled from 'styled-components';


const Header = styled.header`
	text-align: center;
	background-color: var(--black-1);
	padding: 1em;
`;

const Main = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 1em;
	padding-left: 0.75em;
	padding-right: 0.75em;
`;

const Container = styled.div`
	width: 55em;
	max-width: 55em;
`;


//Main component content
const App = () => {

	const [ tasks, setTasks ] = useState([]);
	const [ checkedTasks, setCheckedTasks ] = useState([]);
	const [ inputValue, setInputValue ] = useState("");

	//Submit form
	const submitHandler = (event) => {
				
		//AVoid webapp refresh
		event.preventDefault();

		//If input string is empty, do nothing
		if( inputValue.length === 0 ){
			return;
		}

		//Declares local list
		let list = [...tasks];

		list.push(inputValue);
		setTasks(list); //Updates list
		setInputValue(""); //Clear input value
	};
	
	//Updates input value
	const inputHandler = (event) => {
		setInputValue(event.target.value);
	};

	//Component render
	return (
		<>
			<Header>
				<h1>TODO List</h1>
				<h4>Manage your tasks!</h4>
			</Header>
			<Main>
				<Container>
					<Paper>
						<Form 
							onSubmit={submitHandler} 
							inputValue={inputValue}
							onInputChange={inputHandler}
						/>
					</Paper>
					<TasksList 
						tasks={tasks} 
					/>
				</Container>
			</Main>
		</>
	);
};


export default App; //Export main component
