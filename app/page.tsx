//NextJS
'use client';


//React
import {
	ChangeEvent,
	FormEvent,
	useState,
	useEffect
} from 'react';


//Lib
import {
	createTask,
	readTasks,
	setTasks as setLocalStorageTasks
} from '@/lib/localStorage';


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
	const [ isLoading, setIsLoading ] = useState<boolean>(true);


	useEffect( () => {
		const _tasks = readTasks();

		setTasks(_tasks);
		setIsLoading(false);
	}, [] );

	//Handlers
	const submitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const newValue: Task = {
			label: value,
			checked: false,
			createdAt: new Date(),
			checkedAt: undefined,
		}

		const newTasks = [...tasks, newValue];

		createTask(newValue);
		setTasks(newTasks);
		setValue('');
	};

	const valueHandler = (value: ChangeEvent<HTMLInputElement>) => {
		setValue(value.target.value);
	};

	const deleteTaskHandler = (task: Task) => {

		const index = tasks.indexOf(task);

		const newTasks: Task[] = [...tasks];
		const lsTasks = readTasks();

		newTasks.splice(index, 1);
		lsTasks.splice(index, 1)

		setTasks(newTasks);
		setLocalStorageTasks(lsTasks);
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
				isLoading={isLoading}
				tasks={tasks}
				onDelete={deleteTaskHandler}
			/>
		</main>
	);
};


export default Page; //Export main component
