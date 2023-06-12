//Components
import TaskItem from "./Task";


//Typings
import type Task from "@/typings/Task";
type Tasks = {
	tasks: Task[];
	onDelete: (task: Task[]) => void;
}

//Main component content
const Tasks = (props: Tasks): JSX.Element => {

	//Handlers
	const deleteTaskHandler = (task: Task) => {
		const index = props.tasks.indexOf(task);

		const newTasks: Task[] = [...props.tasks];

		newTasks.splice(index, 1);

		props.onDelete(newTasks);
	};

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
			{props.tasks.map( (task) => (
				<TaskItem
					key={`${task.label}-${task.createdAt.toISOString()}`}
					task={task}
					onDelete={deleteTaskHandler}
				/>
			) )}
		</ul>
	);
};


export default Tasks; //Export main component
