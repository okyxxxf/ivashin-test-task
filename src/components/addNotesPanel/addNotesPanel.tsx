import React, { useState } from 'react';
import { Button, Input } from 'antd';
import './addNotesPanel.css';

const AddNotesPanel = () => {	
	const [value, changeValue] = useState<string>();

	return (
		<div className='add-notes'>
			<Input 
			className='add-notes__input'
			placeholder="Enter your note" 
			allowClear
			onChange={(e) => changeValue(e.target.value)} 
			value={value}/>
			<Button type="primary">Add note</Button>
		</div>
	)
};

export default AddNotesPanel;