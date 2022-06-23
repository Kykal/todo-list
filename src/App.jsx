import React, { useState } from 'react';


//Utils
import { 
	readLocalStorage, 
	saveLocalStorage,
	deleteTaskLocalStorage,
	checkTaskLocalStorage,
	updateLabelTaskLocalStorage
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


const NoTasksLabel = styled.h2`
	text-align: center;
	padding-top: 3em;
`;

const NoTasksLabelSub = styled.h3`
	text-align: center;
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
	const deleteTask = (index) => () => {
		const newTaskList = deleteTaskLocalStorage(index);

		setTasks(newTaskList);
	};

	//To check task
	const checkTask = (index) => () => {
		const newTaskList = checkTaskLocalStorage(index);
		
		setTasks(newTaskList);
	};

	//Description. What does this?
	const updateLabel = (index) => (event) => {
		const newLabel = event.target.value;

		const newTaskList = updateLabelTaskLocalStorage(index, newLabel);

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
					{tasks.length === 0 ? (
						<>
							<NoTasksLabel>
								Looks empty here...
							</NoTasksLabel>
							<NoTasksLabelSub>
								Try adding new tasks!
							</NoTasksLabelSub>
						</>
					) : (
						<TasksList 
							tasks={tasks} //List of all tasks and its status

							deleteTask={deleteTask} //To delete a tasks
							updateLabel={updateLabel}
							checkTask={checkTask}
						/>
					)}
				</Container>
			</Main>
		</>
	);
};


export default App; //Export main component
