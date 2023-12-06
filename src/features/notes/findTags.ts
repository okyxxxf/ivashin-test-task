import note from "../../types/note";

const findTags = (notes : Array<note>) : Array<string> => {
	const tags : Array<string> = [];

	notes.forEach(({text} : note) => {
		const newTags = text.match(/#[a-zA-Zа-яА-Я0-9]{1,}/g) || [];
		newTags.forEach((tag : string) => {
			tags.push(tag);
		});
	});

	return tags;
};

export default findTags;