import Button from '../Button/Button';
import './JournalForm.css';


function JournalForm() {

	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);
	};
 	
	return (
		<form className='journal-form' onSubmit={addJournalItem}>
			<input type='text' name='title'/>
			<input type='date' name='date'/>
			<input type='text' name='tag'/>
			<textarea name='post'></textarea>
			<Button text='Сохранить'/>
		</form>
        
	);
}

export default JournalForm;
