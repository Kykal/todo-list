//NextJS
'use client';


//React
import { ChangeEvent, useState } from 'react';


//Components
import Checkbox	from './_Checkbox';
import Label		from './_Label';


//Typings
import Task from "@/typings/Task";
import Button from './_Button';
type TaskProps = {
	task: Task;
	onDelete: (task: Task) => void;
}

//Main component content
const Task = (props: TaskProps): JSX.Element => {

	//React
	const [ task, setTask ] = useState<Task>(props.task);


	//Handlers
	const checkHandler = (event: ChangeEvent<HTMLInputElement>) => {

		const newChecked = event.target.checked;

		const newValues: Task = {
			...task,
			checked: newChecked,
			checkedAt: new Date(),
		}

		if( newChecked ){
			setTask(newValues);
			return;
		}

		delete newValues.checkedAt;

		setTask(newValues);
	};

	const labelHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setTask({
			...task,
			label: event.target.value,
		});
	};

	const deleteHandler = () => {
		props.onDelete(task);
	};


	//Main component render
	return (
		<li
			className='p-6 bg-k-black-3 rounded-sm flex items-center gap-4'
		>
			<Checkbox
				checked={task.checked}
				onChange={checkHandler}
			/>
			<Label
				value={task.label}
				onChange={labelHandler}
				checked={task.checked}
			/>
			<Button
				onClick={deleteHandler}
			>
				Delete
			</Button>
		</li>
	);
};


export default Task; //Export main component
