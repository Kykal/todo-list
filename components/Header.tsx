//Main component content
const Header = (): JSX.Element => {
	//Main component render
	return (
		<header
			className='h-24 bg-k-black-2'
		>
			<div
				className='container mx-auto h-full text-white flex items-center'
			>
				<div>
					<h1
						className='text-3xl font-bold'
					>
						My todo list
					</h1>
					<h2
						className='text-lg text-neutral-400'
					>
						Manage your tasks!
					</h2>
				</div>
			</div>
		</header>
	);
};


export default Header; //Export main component
