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
	padding-right: 0.5em;

	border-radius: 0.15em;

	margin-bottom: 0.75em;
`;

const Checkbox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 3em;

	& > input[type="checkbox"] {
		background-color: red;
	}
`;

const Label = styled.label`
	font-size: large;
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
	justify-content: space-around;
	width: 6em;
`;

const Button = styled.button`
	width: 2.75em;
	height: 2.75em;

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
		scale: 1.25;
	}
`;


const done = {
	opacity: "0.5"
}


//Main component content
const TasksList = (props) => {


	//Component render
	return (
		<ListContainer>
			{props.tasks.map( (task, index) => (
				<ListItem key={index} >
					<Checkbox>
						<input type="checkbox" name={task} id={task} />
					</Checkbox>
					<LabelOptions  >
						<Label htmlFor={task}>
							{task}
						</Label>
						<Options>
							<Button>
								<AiFillEdit style={{ color: "var(--blue)" }} />
							</Button>
							<Button>
								<AiFillDelete style={{ color: "var(--red)" }} />
							</Button>
						</Options>
					</LabelOptions>
				</ListItem>
			) )}
		</ListContainer>
	);
};


export default TasksList; //Export main component
