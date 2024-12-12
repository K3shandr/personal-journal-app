import './JournalItem.css';

function JournalItem({title,date,text}) {

	const formatDate = new Intl.DateTimeFormat('ru').format(date);

	return (
		<>
			<h3 className='journal-item_head'>{title}</h3>
			<h3 className='journal-item_body'>
				<div className='journal-item__date'>{formatDate}</div>
				<div className='journal-item__text'>{text}</div>
			</h3>
		</>
	);
}

export default JournalItem;
