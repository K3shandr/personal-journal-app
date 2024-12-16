import './Button.css';
import { useState } from 'react';

function Button() {

	const [text,setText] = useState('Открыть');

	const saveFunc = () => {
		setText(t => t + '!');

	};

	return (
		<button onClick = {saveFunc} className='button accent'>{text}</button>
	);
}

export default Button;
