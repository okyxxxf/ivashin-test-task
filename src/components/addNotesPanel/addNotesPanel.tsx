import React, { useState } from 'react';
import { Button, Input } from 'antd';
import './addNotesPanel.css';
import { useAppDispatch } from '../../hooks/hooks';
import { addNote } from '../../features/notes/notesSlice';

const AddNotesPanel = () => {	
	const [value, changeValue] = useState<string>();
	const dispatch = useAppDispatch();

	return (
		<div className='add-notes'>
			<Input 
			className='add-notes__input'
			placeholder="Enter your note" 
			allowClear
			onChange={(e) => changeValue(e.target.value)} 
			value={value}/>
			<Button type="primary"
			onClick={() => {dispatch(addNote(value!));}}
			>Add note</Button>
		</div>
	)
};

export default AddNotesPanel;