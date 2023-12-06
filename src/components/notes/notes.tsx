import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import './notes.css';
import note from "../../types/note";
import Note from "../note/note";
import EditNote from "../note/editNote";

const Notes = () => {
	const notes = useAppSelector(state => state.notes.notes);
	const filters = useAppSelector(state => state.notes.filters);

	const filteredNotes = notes.filter(({text} : note) => {
		if (!filters[0]) return true;
		const tags = text.match(/#[a-zA-Zа-яА-Я0-9]{1,}/g) || [];
		const intersection = tags.filter(tag => filters.includes(tag));
		if (intersection.length > 0) return true;
		return false;
	});

	const notesRender = filteredNotes.map(({text, is_edit} : note, i : number) => {
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