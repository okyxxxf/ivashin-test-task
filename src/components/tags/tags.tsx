import React, { ReactElement } from "react";
import { useAppSelector } from "../../hooks/hooks";
import Tag from "../tag/tag";
import './tags.css';

const Tags = () : ReactElement => {
	const tags = useAppSelector(state => state.notes.tags);

	const uniqueTags = Array.from(new Set(tags));
	const tagsRender = uniqueTags.map((tag : string) => <Tag text={tag} key={tag}/>);

	return (
		<ul className="tags">
			{tagsRender}
		</ul>
	)
};

export default Tags;