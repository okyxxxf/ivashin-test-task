import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import './notes.css';
import note from "../../types/note";
import Note from "../note/note";
import EditNote from "../note/editNote";

const Notes = () => {
	const notes = useAppSelector(state => state.notes.notes);

	const notesRender = notes.map(({text, is_edit} : note, i : number) => {
		if (is_edit) {
			return (
				<EditNote i={i} text={text} key={i}/>
			)
		} else  {
			return (
				<Note i={i} text={text} key={i}/>
			)
		}
	});

	return (
		<ul className="notes">
			{notesRender}
		</ul>
	);
};

export default Notes;