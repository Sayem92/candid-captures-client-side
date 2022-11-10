import React, { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import {  NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  let activeStyle = {
    textDecoration: "underline",
    color : 'green'
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('logout successfully')
        navigate('/')
      })
      .catch(err => console.log(err))
  }


  return (
    <div className="bg-gray-100 ">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <NavLink
              to="/"
              aria-label="Candid Captures"
              title="Candid Captures"
              className="inline-flex items-center mr-8"
            >
              <img className='w-16 h-16 rounded-xl' src={logo} alt="" />

              <span className="ml-2 text-xl text-blue-500 font-bold tracking-wide  uppercase">
                Candid Captures
              </span>
            </NavLink>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <NavLink
                style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
                  to="/home"
                  aria-label="Home"
                  title="Home"
                  className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Home
                </NavLink>
              </li>
              {
                user &&
                <>
                  <li>
                    <NavLink
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                      to="/addService"
                      aria-label="Add Services"
                      title="Add Services"
                      className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
                    >
                      Add Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                      to="/myReviews"
                      aria-label="My Review"
                      title="My Review"
                      className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
                    >
                      My Review
                    </NavLink>
                  </li>
                </>
              }
              <li>
                <NavLink
                style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
                  to="/blogs"
                  aria-label="Blogs"
                  title="Blogs"
                  className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>

          <ul className="flex items-center hidden space-x-8 lg:flex">

            {user ?

              <li>
                <button
                  onClick={handleLogOut}
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 bg-gray-400 hover:bg-gray-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  aria-label="Logout"
                  title="Logout"
                >
                  Logout
                </button>
              </li>

              :

              <li>
                <NavLink
                  to="/register"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 bg-sky-400 hover:bg-sky-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Sign up
                </NavLink>
              </li>

            }

          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute z-10 top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <NavLink
                        to="/"
                        aria-label="Candid Captures"
                        title="Candid Captures"
                        className="inline-flex items-center"
                      >

                        <img className='w-16 h-16 rounded-xl' src={logo} alt="" />

                        <span className="ml-2 text-xl font-bold tracking-wide text-blue-500 uppercase">
                          Candid Captures
                        </span>
                      </NavLink>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <NavLink
                        style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                          to="/home"
                          aria-label="Home"
                          title="Home"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </NavLink>
                      </li>

                      {
                        user &&
                        <>

                          <li>
                            <NavLink
                            style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                          }
                              to="/addService"
                              aria-label="Add Services"
                              title="Add Services"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Add Services
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                            style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                          }
                              to="/myReviews"
                              aria-label="My Review"
                              title="My Review"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              My Review
                            </NavLink>
                          </li>
                        </>
                      }

                      <li>
                        <NavLink
                        style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                          to="/blogs"
                          aria-label="Blogs"
                          title="Blogs"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blogs
                        </NavLink>
                      </li>

                      {
                        user ?

                          <li>
                            <button
                              onClick={handleLogOut}
                              className="inline-flex items-center justify-center h-12 px-6 font-medium w-full tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 bg-gray-400 hover:bg-gray-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                              aria-label="Logout"
                              title="Logout"
                            >
                              Logout
                            </button>
                          </li>

                          :

                          <li>
                            <NavLink
                              to="/register"
                              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-sky-400 hover:bg-sky-500 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                              aria-label="Sign up"
                              title="Sign up"
                            >
                              Sign up
                            </NavLink>
                          </li>
                      }

                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Navbar;