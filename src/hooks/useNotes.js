import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';

export const useNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = localStorage.getItem('Notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  const saveNote = (newNote, id) => {
    if (id) {
      const updatedNotes = notes.map((note) =>
        note.id === id ? { ...note, text: newNote, isSaved: true } : note
      );
      setNotes(updatedNotes);
      localStorage.setItem('Notes', JSON.stringify(updatedNotes));
    } else {
      const updatedNotes = [
        ...notes,
        {
          id: uuidv4(),
          text: newNote,
          date: new Date().toLocaleDateString(),
          isSaved: true,
        },
      ];
      setNotes(updatedNotes);
      localStorage.setItem('Notes', JSON.stringify(updatedNotes));
    }
  };

  const deleteNote = (idToDelete) => {
    const filteredNotes = notes.filter((note) => note.id !== idToDelete);
    setNotes(filteredNotes);
    localStorage.setItem('Notes', JSON.stringify(filteredNotes));
  };

  const getGridDisplay = () => {
    const length = notes.length;
    if (length <= 1) return 'flex gap-4 justify-center items-center';
    if (length > 1)
      return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ';
    return 'text-yellow-500';
  };
  return {
    notes,
    saveNote,
    deleteNote,
    getGridDisplay,
  };
};
