import note from "../../types/note";

const updateLocalStorage = (notes : Array<note>) => {
  localStorage.setItem('notes', JSON.stringify(notes));
};

export default updateLocalStorage;