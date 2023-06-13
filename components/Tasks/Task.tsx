//NextJS
'use client';


//React
import { ChangeEvent, useState, useEffect } from 'react';


//Components
import Button		from './_Button';
import Checkbox	from './_Checkbox';
import Label		from './_Label';


//Typings
import Task from "@/typings/Task";
import { updateTask } from '@/lib/localStorage';
type TaskProps = {
	task: Task;
	index: number;
	onDelete: (task: Task) => void;
}


//Main component content
const Task = (props: TaskProps): JSX.Element => {

	//React
	const [ task, setTask ] = useState<Task>(props.task);


	useEffect( () => {
		updateTask(task, props.index);
	}, [task] );

	//Handlers
	const checkHandler = (event: ChangeEvent<HTMLInputElement>) => {

		const newChecked = event.target.checked;

		if( newChecked ){
			setTask({
				...task,
				checked: newChecked,
				checkedAt: new Date(),
			});
			return;
		}

		setTask({
			...task,
			checked: newChecked,
			checkedAt: undefined,
		});
	};

	const labelHandler = (event: ChangeEvent<HTMLInputElement>) => {

		const newValues: Task = {
			...task,
			label: event.target.value,
		}
		setTask(newValues);
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
