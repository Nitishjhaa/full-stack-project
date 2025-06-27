import React from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/collection', label: 'Collection' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <div className='flex justify-between items-center py-5 font-medium'>
        <img src={assets.logo} className='w-36' alt="Logo" />

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
          {links.map(({ path, label }) => (
            <NavLink
              to={path}
              key={path}
              className='flex flex-col items-center gap-1'
            >
              <p className='uppercase'>{label}</p>
              <hr
                className={`${location.pathname === path ? 'block' : 'hidden'
                  } w-2/4 border-none h-[1.5px] bg-gray-700`}
              />
            </NavLink>
          ))}
        </ul>

        <div className='flex items-center gap-6'>

        </div>

      </div>

    </>
  );
};

