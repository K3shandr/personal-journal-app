import './JournalAddButton.css';
import CardButton from '../CardButton/CardButton';

function JournalAddButton() {


	return (
		<div className='journal-add-button'>
			<CardButton className='journal-add'>
				<img className='plus' src='/plus.svg'/>
                Новое воспоминание
			</CardButton>
            
		</div>
	);
}

export default JournalAddButton;
