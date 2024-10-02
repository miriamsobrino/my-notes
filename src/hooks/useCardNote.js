import { useState } from 'react';

export const useCardNote = ({ id, text, onSave, onDelete }) => {
  const maxLengthCharacters = 140;
  const [contentNote, setContentNote] = useState(text || '');
  const [showCharacters, setShowCharacters] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const hadnleChangeContentNote = (event) => {
    setContentNote(event.target.value);
  };
  const getCharacterColor = () => {
    const length = contentNote.length;
    if (length > 120) return 'text-red-500';
    if (length < 80) return 'text-teal-300';
    return 'text-yellow-500';
  };
  const handleSave = () => {
    if (contentNote.trim()) {
      setIsLoading(true);
      setTimeout(() => {
        onSave(contentNote, id);
        setIsEditing(false);
        setIsLoading(false);
        !isEditing ? setContentNote('') : '';
      }, 1000);
    } else {
      alert('Escribe una nota para poder guardar');
      setIsLoading(false);
    }
  };

  const handleDelete = () => {
    onDelete(contentNote);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setShowCharacters(true);
  };

  return {
    contentNote,
    isEditing,
    isLoading,
    isFocused,
    maxLengthCharacters,
    showCharacters,
    setShowCharacters,
    setIsFocused,
    hadnleChangeContentNote,
    getCharacterColor,
    handleSave,
    handleDelete,
    handleEdit,
  };
};
