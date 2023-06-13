//Components
import TaskItem from "./Task";


//Typings
import type Task from "@/typings/Task";
type Tasks = {
	tasks: Task[];
	onDelete: (task: Task) => void;
	isLoading: boolean;
}

//Main component content
const Tasks = (props: Tasks): JSX.Element => {

	//Handlers
	const deleteTaskHandler = (task: Task) => {
		props.onDelete(task);
	};

	if( props.isLoading ){
		return(
			<ul
				className='flex flex-col gap-4'
			>
				<li
					className='text-center'
				>
					<span
						className='text-2xl animate-pulse'
					>
						Loading tasks...
					</span>
				</li>
			</ul>
		);
	}

	if( props.tasks.length == 0 ){
		return(
			<ul
				className='flex flex-col gap-4'
			>
				<li
					className='text-center'
				>
					<h4
						className='text-2xl font-bold'
					>
						Looks a little bit empty...
					</h4>
					<span
						className='text-xl text-neutral-500'
					>
						Try to add some tasks!
					</span>
				</li>
			</ul>
		);
	}


	//Main component render
	return (
		<ul
			className='flex flex-col gap-4'
		>
			{props.tasks.map( (task, index) => (
				<TaskItem
					key={`${task.label}-${task.createdAt.toISOString()}`}
					task={task}
					index={index}
					onDelete={deleteTaskHandler}
				/>
			) )}
		</ul>
	);
};


export default Tasks; //Export main component
