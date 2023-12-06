import React, { useState } from "react";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { useAppDispatch } from "../../hooks/hooks";
import { checkTags, deleteNote, disableEditMode } from "../../features/notes/notesSlice";
import { Input } from "antd";

interface editNoteProps {
	i : number,
	text : string,
}

const EditNote = ({i , text} : editNoteProps) => {
	const dispatch = useAppDispatch();
	const [value, changeValue] = useState<string>(text);

	const hasTag = (value : string) : boolean => {
		if (value.match(/#[a-zA-Zа-яА-Я0-9]{1,}/g)) return true;
		return false;
	};

  return (
		<li className="note" key={i} >
			<Input 
			className={hasTag(value) ? 'add-notes__input tagged' : 'add-notes__input'}
			placeholder="Enter your note" 
			onChange={(e) => {
				changeValue(e.target.value);
				e.target.classList.remove('tagged');
				if (hasTag(e.target.value)) e.target.classList.add('tagged');
			}} 
			value={value}/>
			<div className="note__icons">
				<DeleteTwoTone onClick={() => {
					dispatch(deleteNote({note : value, index: i}));
					dispatch(checkTags());
				}}/>
				<EditTwoTone onClick={() => {	
					if (value) dispatch(disableEditMode({note : value, index: i}));
					dispatch(checkTags());
				}}/>
			</div>
		</li> 
	)
};

export default EditNote;