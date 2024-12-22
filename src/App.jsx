import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';


function App() {

	const INITIAL_DATA = [
	
	];
	const [data,setData] = useState(INITIAL_DATA);


	const addItem = item => {
		setData(oldItems => [...oldItems,{
			text: item.text,
			title: item.title,
			date: new Date(item.date),
			id: Math.max(...oldItems.map(i=> i.id))+1
		}]);
	};
	

	


	return (
    

		<div className='app'>
			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList data={data} />
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem}/>
			</Body>

		</div>
	);
}

export default App;
