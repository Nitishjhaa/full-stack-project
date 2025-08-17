import { useContext, useState } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

export default function Navbar() {

  const [isOpen, setInOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const {setShowSearch, showSearch} = useContext(ShopContext)

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
        <Link to='/'>
          <img src={assets.logo} className='w-36' alt="Logo" />
        </Link>

        <ul className='hidden md:flex gap-5 text-sm text-gray-700'>
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
          <img onClick={() => setShowSearch(!showSearch)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
          <div className='group relative'>
            <img onClick={() => setInOpen((prev) => !prev)} src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
            {isOpen && (
              <div className='relative'>
                <div className='w-[100vw] h-[90vh] -right-[11vw] absolute'>

                  <div className='flex flex-col gap-5 justify-center items-center h-3/4'>
                    <div className='flex justify-center items-center text-3xl gap-3'>
                      <h2 className='prata-regular'>Login</h2>
                      <hr className='w-10 mt-2 border' />
                    </div>
                    <form action="" method="post" className='flex flex-col gap-5 max-md:ml-30'>
                      <input type="text" placeholder='Email' className='border w-95 h-12 pl-5 rounded-none' />
                      <input type="password" placeholder='Password' className='border w-95 h-12 pl-5 rounded-none' />
                      <div className='flex w-full justify-between items-center text-sm -mt-5 font-normal'>
                        <span>Forget Password</span>
                        <span className='ml-42'>Create Account</span>
                        <span></span>
                      </div>
                      <button className='w-30 mt-5 h-10 mx-auto bg-black text-white hover:bg-white hover:border duration-300 hover:text-black' type="submit">Login </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link to='/cart' >
            <img src={assets.cart_icon} className='w-5 cursor-pointer' alt="" />
            <p className='w-4 h-4 -mt-2.5 ml-2 text-xs bg-black text-white rounded-full flex justify-center items-center z-10'>10</p>

          </Link>

          <img onClick={() => setIsMenuOpen((prev) => !prev)} src={isMenuOpen ? assets.cross_icon : assets.menu_icon} className='w-5 hidden max-md:block -mt-1' alt="" />
          {/* sidebar menu */}
          {
            isMenuOpen &&
            <div className={'absolute top-16 h-screen w-full backdrop-blur-xl right-0'}>
              <div className='flex flex-col gap-6 mt-10'>
                {links.map(({ path, label }) => (
                  <NavLink
                    to={path}
                    key={path}
                    className='flex flex-col ml-5 gap-1'
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                  >
                    <p className='uppercase'>{label}</p>
                    <hr
                      className={`${location.pathname === path ? 'block' : 'hidden'
                        } w-1/8 border-none h-[1.5px] bg-gray-700`}
                    />
                  </NavLink>
                ))}
              </div>
            </div>
          }

        </div>

      </div>

    </>
  );
};

