import { ChangeEvent, FormEvent } from "react";

//Typings
type TaskForm = {
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}


//Main component content
const TaskForm = (props: TaskForm): JSX.Element => {
	//Main component render
	return (
		<form
			className='bg-k-black-3 px-5 py-6 rounded-sm'
			onSubmit={props.onSubmit}
		>
			<label
				className='font-bold text-2xl'
			>
				Task label
			</label>
			<div
				className='flex gap-4 pt-2'
			>
				<input
					type="text"
					className='rounded-sm bg-k-black-4 text-xl placeholder:text-neutral-400 px-3 py-4 grow'
					placeholder='Clean dinning room table...'

					value={props.value}
					onChange={props.onChange}
				/>
				<button
					type='submit'
					className='rounded-sm bg-k-black-4 hover:bg-k-black-5 px-6 py-4 uppercase font-bold disabled:bg-k-black-4/30 disabled:text-white/30 disabled:cursor-not-allowed'
					disabled={props.value.length === 0}
				>
					Add task
				</button>
			</div>
		</form>
	);
};


export default TaskForm; //Export main component
