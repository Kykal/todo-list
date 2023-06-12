//React
import { ChangeEvent } from 'react';


//Typings
type Checkbox = {
	checked: boolean;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}


//Main component content
const Checkbox = (props: Checkbox): JSX.Element => {
	//Main component render
	return (
		<input
			type="checkbox"
			className='w-6 h-6 cursor-pointer'
			checked={props.checked}
			onChange={props.onChange}
		/>
	);
};


export default Checkbox; //Export main component
