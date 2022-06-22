import React from 'react';


//Styled
import styled from 'styled-components';


const StyledPaper = styled.div`
	background-color: var(--black-2);
	border-radius: 0.25em;
	padding: 1.25em;
`;


//Main component content
const Paper = (props) => {


	//Component render
	return (
		<StyledPaper id={props.id} className={`PaperContainer-root ${props.className}`} >
			{props.children}
		</StyledPaper>
	);
};


export default Paper; //Export main component

Paper.defaultProps = {
	className: ""
}