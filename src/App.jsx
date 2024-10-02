import { useState, useEffect } from 'react';
import './App.css';
import { CardNote } from './components/CardNote';
import { Header } from './components/Header';
import { v4 as uuidv4 } from 'uuid';
import { useNotes } from './hooks/useNotes';

function App() {
  const { notes, getGridDisplay, saveNote, deleteNote } = useNotes();
  return (
    <div className='w-full flex flex-col min-h-screen justify-start items-center dark:bg-gray-900 dark:text-zinc-50'>
      <Header />
      <main className='w-full flex flex-col  mt-10 mb-16 justify-between items-center'>
        <section className={getGridDisplay()}>
          <CardNote onSave={saveNote} className='block lg:hidden' />
          {notes.map((note) => (
            <CardNote
              key={note.id}
              id={note.id}
              text={note.text}
              date={note.date}
              isSaved={note.isSaved}
              onSave={saveNote}
              onDelete={() => deleteNote(note.id)}
            />
          ))}

          <CardNote onSave={saveNote} className='hidden lg:flex ' />
        </section>
      </main>
    </div>
  );
}

export default App;
