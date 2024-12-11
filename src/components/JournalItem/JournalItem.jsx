import './JournalItem.css';

function JournalItem({title,date,text}) {

  return (
    <div className='journal-item'>
        <h3 className='journal-item_head'>{title}</h3>
        <h3 className='journal-item_body'>
            <div className='journal-item__date'>{date}</div>
            <div className='journal-item__text'>{text}</div>
        </h3>
    </div>
  );
}

export default JournalItem;
