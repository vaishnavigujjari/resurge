import React, { useState } from 'react';
import { MenuItems } from '../../assets/MenuItems';
import './Header.css';

const Header = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <nav className='NavBarItems'>
        <h1 className='NavBarLogo'>
          <a className="project-name" href='/'>RESURGE</a>
        </h1>
        <div className='menu-icon' onClick={() => setClicked(!clicked)}>
          {<i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>}
        </div>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className={item.cName}
                  href={item.url}
                >
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default Header;