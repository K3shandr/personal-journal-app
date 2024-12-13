import './Button.css';

function Button() {

	const saveFunc = () => {
		console.log('saved');
	};

	return (
		<button onClick = {saveFunc} className='button accent'>Save</button>
	);
}

export default Button;
