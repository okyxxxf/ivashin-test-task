import React from "react";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { useAppDispatch } from "../../hooks/hooks";
import { checkTags, deleteNote, enableEditMode } from "../../features/notes/notesSlice";

interface noteProps {
	i : number,
	text : string,
}

const Note = ({i , text} : noteProps) => {
	const dispatch = useAppDispatch();
  return (
		<li className="note" key={i}>
			{text}
			<div className="note__icons">
				<DeleteTwoTone onClick={() => {
					dispatch(deleteNote({note : text, index: i}));
					dispatch(checkTags());
				}}/>
				<EditTwoTone onClick={() => dispatch(enableEditMode({note : text, index: i}))}/>
			</div>
		</li> 
	)
};

export default Note;