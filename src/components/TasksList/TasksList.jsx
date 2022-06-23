import React from 'react';


//Styled
import styled from 'styled-components';


//React icons
import {
	AiFillDelete,
	AiFillEdit
} from "react-icons/ai";

//Styled components
const ListContainer = styled.ul`
	padding-top: 3em;

`;


const ListItem = styled.li`

	display: flex;

	list-style-type: none;
	background-color: var(--black-2);
	height: 4em;
	padding-right: 1.25em;

	border-radius: 0.15em;

	margin-bottom: 0.75em;
`;

const Checkbox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 3em;
	cursor: pointer;

	& > input[type="checkbox"]:checked {
		color: red;
	}
`;


const InputLabel = styled.input`
	font-size: large;
	background-color: var(--black-2);
	border: none;
	color: var(--white);
`;

const LabelOptions = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	


	flex-grow: 1;
`;

const Options = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: 7.5em;
	height: 100%;
`;

const Button = styled.button`
	width: 3.25em;
	height: 3.25em;

	background-color: var(--black-4);
	border: none;
	color: var(--white);

	border-radius: 50%;
	cursor: pointer;


	&:hover {
		background-color: var(--black-3);
	}

	&:active {
		background-color: var(--black-1);
	}

	& svg {
		scale: 1.4;
	}
`;


const done = {
	opacity: "0.5"
}


//Main component content
const TasksList = (props) => {

	const tasks = props.tasks;

	//Component render
	return (
		<ListContainer>
			{tasks.map( (task, index) => (
				<ListItem key={index} >
					<Checkbox onClick={props.checkTask(index)} >
						<input 
							type="checkbox" 
							name={task.label} 
							id={task.label}
							checked={task.isChecked}
							readOnly				
						/>
					</Checkbox>
					<LabelOptions
						style={{
							opacity: task.isChecked ? "0.5": "1"
						}}
					>
						<InputLabel
							value={task.label}
							onChange={props.updateLabel(index)}
						/>
						<Options>
							<Button onClick={props.deleteTask(index)} >
								<AiFillDelete />
							</Button>
						</Options>
					</LabelOptions>
				</ListItem>
			) )}
		</ListContainer>
	);
};


export default TasksList; //Export main component
