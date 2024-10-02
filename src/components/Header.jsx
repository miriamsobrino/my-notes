import { useContext } from 'react';
import { SunIcon } from '../assets/icons/SunIcon';
import { MoonIcon } from '../assets/icons/MoonIcon';
import { Switch } from './Switch';
import { NoLightIcon } from '../assets/icons/NoLightIcon';
import { LightIcon } from '../assets/icons/LightIcon';
import { DarkModeContext } from '../context/DarkModeContext';

export const Header = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <header className='mt-8 w-full text-center flex flex-col justify-center items-center relative'>
      <button
        className='mb-6 lg:absolute lg:top-0 lg:right-0'
        onClick={toggleDarkMode}
      >
        {isDarkMode ? (
          <Switch>
            <LightIcon />
          </Switch>
        ) : (
          <Switch>
            <NoLightIcon />
          </Switch>
        )}
      </button>
      <h1 className='text-3xl font-medium z-20 text-gray-800 -rotate-2'>
        MyNotes
      </h1>
      <div className='h-10 bg-yellow-300 w-44  absolute lg:top-0 top-12 z-10 -rotate-2'></div>
    </header>
  );
};
