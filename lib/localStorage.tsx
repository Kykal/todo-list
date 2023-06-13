//Typings
import Task from "@/typings/Task";


const target = 'tasks';


/**
 * Read stored tasks in localStorage task list.
 * @returns list of Task
 */
export const readTasks = (): Task[] => {

	let tasks = localStorage.getItem(target);

	if( !tasks ){
		localStorage.setItem(target, '[]');
		return readTasks();
	}


	let parsed: Task[] = JSON.parse(tasks);

	parsed = parsed.map( (task: Task) => ({
		...task,
		createdAt: new Date(task.createdAt),
		checkedAt: task.checkedAt && new Date(task.checkedAt),
	}) );
	return parsed;
}


/**
 * Create and push new task to localStorage task list
 * @param task New task to push
 */
export const createTask = (task: Task) => {
	const tasks = readTasks();

	tasks.push(task);

	const newLocalValue = JSON.stringify(tasks);

	localStorage.setItem(target, newLocalValue);
}


/**
 * Update whole localStorage tasks list.
 * @param tasks New value
 */
export const setTasks = (tasks: Task[]) => {
	
	const newValue = JSON.stringify(tasks);
	
	localStorage.setItem(target, newValue);
}


/**
 * Update task element from localStorage tasks list
 * @param task New task data
 */
export const updateTask = (task: Task, index: number) => {
	const tasks = readTasks();

	tasks[index] = task;

	setTasks(tasks);
}
