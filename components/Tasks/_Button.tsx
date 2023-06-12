//Typings
type Button = {
	children: string;
	onClick: () => void;
}


//Main component content
const Button = (props: Button): JSX.Element => {
	//Main component render
	return (
		<button
			className='uppercase bg-k-black-4 px-6 py-4 rounded-sm'
			onClick={props.onClick}
		>
			{props.children}	
		</button>
	);
};


export default Button; //Export main component
