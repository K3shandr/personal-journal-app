import './JournalList.css';
import JournalItem from '../JournalItem/JournalItem';
import CardButton from '../CardButton/CardButton';

function JournalList({data}) {


	const sortItems = (a,b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	};

	if (data.length === 0) {
		return <p>Список пуст, добавьте новое воспоминание</p>;
	}

	return <>{data.sort(sortItems).map(el => (
		<CardButton key={el.id}>
			<JournalItem 
				title={el.title}
				date={el.date}
				text={el.text}
			/>
		</CardButton>
	))}
	</>;


}

export default JournalList;
