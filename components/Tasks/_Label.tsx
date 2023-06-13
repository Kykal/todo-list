//React
import { ChangeEvent } from "react";


//Typings
type Label = {
	value: string;
	checked: boolean;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}


//Main component content
const Label = (props: Label): JSX.Element => {
	//Main component render
	return (
		<input
			type="text"
			className={`grow bg-k-black-3 focus:bg-k-black-4 text-lg ${props.checked && 'line-through'} ${props.checked && 'text-neutral-400'}`}
			value={props.value}
			onChange={props.onChange}
			multiple
		/>
	);
};


export default Label; //Export main component
