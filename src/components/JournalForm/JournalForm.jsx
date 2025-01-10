import { useEffect, useReducer } from 'react';
import Button from '../Button/Button';
import styles from './JournalForm.module.css';
import cn from 'classnames';
import { formReducer, INITIAL_STATE } from './JournalForm.state';

function JournalForm({onSubmit}) {


	const [formState,dispatchForm] = useReducer(formReducer,INITIAL_STATE)
	const {isValid,isFormReadyToSubmit, values} = formState;

	useEffect(()=> {
		let timerId;
		if (!isValid.date || !isValid.title || !isValid.text ){
			timerId = setTimeout(() => {dispatchForm({type: 'RESET_VALIDITY'})},2000)
		}
		return () => {
			clearTimeout()
		}
	},[isValid])

	useEffect(()=>{
		if (isFormReadyToSubmit){
			onSubmit(values);
			dispatchForm({type: 'CLEAR'});
		}
	},
	[isFormReadyToSubmit])


	const onChange = (e) => {
		dispatchForm({type:'SET_VALUE',payload:{[e.target.name]:e.target.value}})
	}


	const addJournalItem = (e) => {
		e.preventDefault();
		dispatchForm({type:'SUBMIT'})
		

	};
 	
	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<div>
				<input type='text' onChange={onChange} name='title' value={values.title} className={cn(styles['input-title'],{
					[styles.invalid] : !isValid.title}
				)}/>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor='date' className={styles['form-label']}>
					<img className={styles['calendar-icon']} src='/calendar.svg' alt='иконка календаря'/>
					<span>Дата</span>
				</label>
				<input type='date' onChange={onChange} name='date' value={values.date} id='date' className={cn(styles.input,{
					[styles.invalid] : !isValid.date}
				)}/>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor='tag' className={styles['form-label']}>
					<img className={styles['folder-icon']} src='/folder.svg' alt='Иконка папки' />
					<span>Метки</span>
				</label>
				<input type='text' onChange={onChange} id='tag' value={values.tag} name='tag' className={styles.input}/>
			</div>
			
			<textarea name='text' onChange={onChange} value={values.text} className={cn(styles.input,{
				[styles.invalid] : !isValid.text}
			)}></textarea>
			<Button text='Сохранить'/>
		</form>
        
	);
}

export default JournalForm;
