//NextJS
'use client';


//React
import { ChangeEvent, FormEvent, useState } from 'react';


//Components
import TaskForm from '@/components/TaskForm';
import Tasks from '@/components/Tasks';


//Typings
import type Task from '@/typings/Task';


//Main component content
const Page = (): JSX.Element => {

	//React
	const [ value, setValue ] = useState<string>('');
	const [ tasks, setTasks ] = useState<Task[]>([]);


	//Handlers
	const submitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const newValue: Task = {
			label: value,
			checked: false,
			createdAt: new Date(),
		}

		const newTasks = [...tasks, newValue];

		setTasks(newTasks);
		setValue('');
	};

	const valueHandler = (value: ChangeEvent<HTMLInputElement>) => {
		setValue(value.target.value);
	};

	const tasksHandler = (tasks: Task[]) => {
		setTasks(tasks);
	};


	//Main component render
	return (
		<main
			className='container mx-auto pt-6 flex flex-col gap-6'
		>
			<TaskForm
				value={value}
				onChange={valueHandler}
				onSubmit={submitHandler}
			/>
			<Tasks
				tasks={tasks}
				onDelete={tasksHandler}
			/>
		</main>
	);
};


export default Page; //Export main component
