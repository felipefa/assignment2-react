import React from 'react';

const Char = props => {
	let componentStyle = {
		display: 'inline-block', 
		padding: '16px', 
		textAlign: 'center', 
		margin: '16px', 
		border: '1px solid black',
		borderRadius: '4px',
		cursor: 'pointer'
	};

	return <div style={componentStyle} onClick={props.click}>{props.char}</div> 
}

export default Char;