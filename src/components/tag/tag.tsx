import React, { ReactElement } from 'react';
import './tag.css';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { addFilter, deleteFilter } from '../../features/notes/notesSlice';

interface tagProps {
  text : string,
}

const Tag = ({text} : tagProps) : ReactElement => {
	const dispatch = useAppDispatch();
	const filters = useAppSelector(state => state.notes.filters);

	return (
		<li className={filters.includes(text) ? 'tag active' : 'tag'} 
		onClick={() => {
			if (filters.includes(text)) {
				dispatch(deleteFilter(text));
			} else {
				dispatch(addFilter(text));
			}
		}}>{text}</li>
	)
};

export default Tag;