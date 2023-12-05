import React, { useState } from "react";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { useAppDispatch } from "../../hooks/hooks";
import { deleteNote, disableEditMode } from "../../features/notes/notesSlice";
import { Input } from "antd";

interface noteProps {
	i : number,
	text : string,
}

const Note = ({i , text} : noteProps) => {
	const dispatch = useAppDispatch();
	const [value, changeValue] = useState<string>(text);

  return (
		<li className="note" key={i}>
			<Input 
			className='add-notes__input'
			placeholder="Enter your note" 
			onChange={(e) => changeValue(e.target.value)} 
			value={value}/>
			<div className="note__icons">
				<DeleteTwoTone onClick={() => dispatch(deleteNote(i))}/>
				<EditTwoTone onClick={() => dispatch(disableEditMode({note : value, index: i}))}/>
			</div>
		</li> 
	)
};

export default Note;