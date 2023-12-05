import React from "react";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { useAppDispatch } from "../../hooks/hooks";
import { deleteNote, enableEditMode } from "../../features/notes/notesSlice";

interface editNoteProps {
	i : number,
	text : string,
}

const EditNote = ({i , text} : editNoteProps) => {
	const dispatch = useAppDispatch();
  return (
		<li className="note" key={i}>
			{text}
			<div className="note__icons">
				<DeleteTwoTone onClick={() => dispatch(deleteNote(i))}/>
				<EditTwoTone onClick={() => dispatch(enableEditMode({note : text, index: i}))}/>
			</div>
		</li> 
	)
};

export default EditNote;