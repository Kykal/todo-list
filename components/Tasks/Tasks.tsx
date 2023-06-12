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
