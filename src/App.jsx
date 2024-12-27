import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';


function App() {

	const [data,setData] = useState([]);

	useEffect(() => {
		const dataFromLocal = JSON.parse(localStorage.getItem('Data'))

		if (dataFromLocal) {
			setData(dataFromLocal.map(item => ({
				...item,date: new Date(item.date),
			})))
		};
	},[]);

	const addItem = item => {
		setData(oldItems => [...oldItems,{
			text: item.text,
			title: item.title,
			date: new Date(item.date),
			id: data.length == 0 ? 1 : Math.max(...oldItems.map(i=> i.id))+1
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
