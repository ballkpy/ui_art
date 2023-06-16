import React from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons';
import { images } from '../../assets/index.js';

const navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav className='nav_main'>
        <div className='container'>
          <div className='nav_logo'>
            <img src={images.logo}></img>
            <h3>Drawphap</h3>
          </div>

          <ul className='nav_menu-list'>
            <li>
              <Link
                to='aboutUs'
                spy={true}
                smooth={true}
                offset={-200}
                duration={300}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to='showCase'
                spy={true}
                smooth={true}
                offset={-200}
                duration={300}
              >
                Showcase
              </Link>
            </li>
            <li>
              <Link
                to='howto'
                spy={true}
                smooth={true}
                offset={-110}
                duration={300}
              >
                How to use
              </Link>
            </li>
            <li>
              <Link
                to='contact'
                spy={true}
                smooth={true}
                offset={-200}
                duration={300}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className='nav_button'>
            <a>Sign Up</a>
            <a>Login</a>
          </div>

          <FontAwesomeIcon
            icon={faBarsStaggered}
            className='hamburger_menu'
            onClick={() => setToggleMenu(true)}
          />
        </div>
      </nav>

      <div className={`menu_mobile ${toggleMenu ? 'active' : ''}`}>
        <FontAwesomeIcon
          icon={faXmark}
          className='close_menu'
          onClick={() => setToggleMenu(false)}
        />
        <div className='mobile_container'>
          <ul className='mobile_menu-list'>
            <li>
              <Link
                to='aboutUs'
                spy={true}
                smooth={true}
                offset={-200}
                duration={300}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to='showCase'
                spy={true}
                smooth={true}
                offset={-200}
                duration={300}
              >
                Showcase
              </Link>
            </li>
            <li>
              <Link
                to='howto'
                spy={true}
                smooth={true}
                offset={-110}
                duration={300}
              >
                How to use
              </Link>
            </li>
            <li>
              <Link
                to='contact'
                spy={true}
                smooth={true}
                offset={-200}
                duration={300}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className='mobile_button'>
            <a>Sign Up</a>
            <a>Login</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default navbar;
