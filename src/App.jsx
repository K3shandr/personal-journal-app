import { useState } from 'react';
import './App.css';
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalItem from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';


function App() {

	const INITIAL_DATA = [
		{title:'тестовый заголовок первой карточки',
			text: 'тестовы текст первой карточки',
			date: new Date()
		}
	];
	const [data,setData] = useState(INITIAL_DATA);


	const addItem = item => {
		setData(oldItems => [...oldItems,{
			text: item.text,
			title: item.title,
			date: new Date(item.date)
		}]);
	};
	
	return (
    

		<div className='app'>
			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList> 
					{data.map(el => (
						<CardButton>
							<JournalItem 
								title={el.title}
								date={el.date}
								text={el.text}
							/>
						</CardButton>
					))}
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem}/>
			</Body>

		</div>
	);
}

export default App;
