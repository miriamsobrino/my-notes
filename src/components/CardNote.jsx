import { TrashIcon } from '../assets/icons/TrashIcon';
import { EditIcon } from '../assets/icons/EditIcon';
import { SaveIcon } from '../assets/icons/SaveIcon';
import { SavedIcon } from '../assets/icons/SavedIcon';
import { Loader } from './Loader';
import { useCardNote } from '../hooks/useCardNote';

export const CardNote = ({
  text,
  date,
  onSave,
  onDelete,
  isSaved,
  id,
  className,
}) => {
  const {
    contentNote,
    showCharacters,
    maxLengthCharacters,
    isFocused,
    isLoading,
    isEditing,
    getCharacterColor,
    handleDelete,
    handleEdit,
    handleSave,
    hadnleChangeContentNote,
    setShowCharacters,
    setIsFocused,
  } = useCardNote({ text, id, onSave, onDelete });

  return (
    <article
      className={` ${
        isSaved && !isEditing ? 'bg-zinc-100 ' : 'bg-zinc-50'
      } drop-shadow-md shadow-slate-400  w-80 h-44 dark:bg-gray-800 flex flex-col justify-between items-start p-2 hover:scale-[1.05] transition-all duration-200 ${className}  ${
        isFocused && !isSaved
          ? 'border-2 border-zinc-200 rounded-md'
          : 'border-2 border-zinc-50 rounded-md dark:border-slate-800 '
      }`}
    >
      <div className='flex justify-between w-full h-full gap-4'>
        <textarea
          type='text'
          className={` ${
            isSaved && !isEditing ? 'bg-zinc-100' : 'bg-zinc-50'
          } w-60 max-h-44 focus:outline-none resize-none border-none  dark:bg-transparent`}
          placeholder='Type to add a note...'
          maxLength={maxLengthCharacters}
          value={contentNote}
          onChange={hadnleChangeContentNote}
          onFocus={() => {
            !isSaved && setShowCharacters(true);
            setIsFocused(true);
          }}
          onBlur={() => {
            setShowCharacters(false);
            setIsFocused(false);
          }}
          readOnly={isSaved && !isEditing}
        />
        {showCharacters && (
          <small className={getCharacterColor()}>
            {contentNote.length}/{maxLengthCharacters}
          </small>
        )}
      </div>
      <div className='flex justify-between w-full items-end'>
        <small className='text-zinc-400'>{date}</small>

        <div className='flex justify-end gap-2 items-center '>
          <button onClick={handleEdit}>
            <EditIcon />
          </button>
          <button onClick={handleDelete}>
            <TrashIcon />
          </button>
          <button
            className={`${
              isSaved && !isEditing
                ? 'bg-slate-200 cursor-default dark:bg-slate-700 '
                : ' bg-yellow-300 hover:bg-yellow-400 transition-all duration-200 dark:text-slate-900'
            }     px-2 py-1 rounded-md flex gap-2 items-center `}
            onClick={handleSave}
          >
            {isLoading
              ? 'Saving...'
              : isEditing
              ? 'Save'
              : isSaved
              ? 'Saved'
              : 'Save'}

            {isLoading ? (
              <Loader />
            ) : isEditing || !isSaved ? (
              <SaveIcon />
            ) : (
              <SavedIcon />
            )}
          </button>
        </div>
      </div>
    </article>
  );
};
