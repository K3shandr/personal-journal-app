import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import styles from './JournalForm.module.css';
import cn from 'classnames';

function JournalForm({onSubmit}) {

	const INITIAL_STATE = {
		title: true,
		date:true,
		text:true}

	const [formValidState,setFormValidState] = useState(INITIAL_STATE);
	
	useEffect(()=> {
		let timerId;
		if (!formValidState.date || !formValidState.title || !formValidState.text){
			timerId = setTimeout(() => {setFormValidState(INITIAL_STATE)},2000)
		}
		return () => {
			clearTimeout()
		}
	},[formValidState])


	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		let isFormValid = true;
		if (!formProps.title?.trim().length) {
			setFormValidState(state => ({...state,title:false}));
			isFormValid = false;
		} else {
			setFormValidState(state => ({...state,title:true}));
		}
		if (!formProps.date) {
			setFormValidState(state => ({...state,date:false}));
			isFormValid = false;
		} else {
			setFormValidState(state => ({...state,date:true}));
		}
		if (!formProps.text?.trim().length) {
			setFormValidState(state => ({...state,text:false}));
			isFormValid = false;
		} else {
			setFormValidState(state => ({...state,text:true}));
		}
		if (!isFormValid){
			return;
		}
		onSubmit(formProps);

	};
 	
	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<div>
				<input type='text' name='title' className={cn(styles['input-title'],{
					[styles.invalid] : !formValidState.title}
				)}/>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor='date' className={styles['form-label']}>
					<img className={styles['calendar-icon']} src='/calendar.svg' alt='иконка календаря'/>
					<span>Дата</span>
				</label>
				<input type='date' name='date' id='date' className={cn(styles.input,{
					[styles.invalid] : !formValidState.date}
				)}/>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor='tag' className={styles['form-label']}>
					<img className={styles['folder-icon']} src='/folder.svg' alt='Иконка папки' />
					<span>Метки</span>
				</label>
				<input type='text' id='tag' name='tag' className={styles.input}/>
			</div>
			
			<textarea name='text'className={cn(styles.input,{
				[styles.invalid] : !formValidState.text}
			)}></textarea>
			<Button text='Сохранить'/>
		</form>
        
	);
}

export default JournalForm;
