import React, { useState } from 'react';


//Utils
import { 
	readLocalStorage, 
	saveLocalStorage,
	deleteTaskLocalStorage,
	checkTaskLocalStorage
} from './util';


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

	const [ tasks, setTasks ] = useState( readLocalStorage() );
	const [ inputValue, setInputValue ] = useState("");

	//Submit form
	const submitHandler = (event) => {
				
		//Avoid webapp to refresh
		event.preventDefault();

		//If input string is empty, do nothing
		if( inputValue.length === 0 ){
			return;
		}

		//Declares local list
		let list = [...tasks];

		list.push({
			label: inputValue,
			isChecked: false
		});

		//Update list
		setTasks(list);
		saveLocalStorage(list); //localStorage

		setInputValue(""); //Clear input value
	};
	
	//Updates input value
	const inputHandler = (event) => {
		setInputValue(event.target.value);
	};

	//Delete task from state and localStorage
	const deleteTask = (index) => (event) => {
		const newTaskList = deleteTaskLocalStorage(index);

		setTasks(newTaskList);
	};

	//To check task
	const checkTask = (index) => (event) => {
		const newTaskList = checkTaskLocalStorage(index);
		
		setTasks(newTaskList);
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
						tasks={tasks} //List of all tasks and its status

						deleteTask={deleteTask} //To delete a tasks

						checkTask={checkTask}
					/>
				</Container>
			</Main>
		</>
	);
};


export default App; //Export main component
