import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profileImg from '../../assets/profile_img.png';
import dropdown_icon from '../../assets/dropdown_icon.svg';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = ({ onScrollToTvShows, onScrollToMovies, onScrollToPopular }) => {
  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <div className='navbar-left'>
       <NavLink to="/"><img src={logo} alt='Logo' /></NavLink> 
        <ul>
          <li>Home</li>
          <li onClick={onScrollToTvShows}>TV Shows</li>
          <li onClick={onScrollToMovies}>Movies</li>
          <li onClick={onScrollToPopular}>New & Popular</li>
          <li onClick={() => navigate('/price')}>Price</li>
        </ul>
      </div>

      <div className='navbar-right'>
        <img className='icons' src={search_icon} alt='search' />
        <img className='icons' src={bell_icon} alt='bell' />
        <div className='navbar-profile'>
          <img onClick={() => navigate('/login')} className='profile-Img' src={profileImg} alt='profile' />
          <img className='profile-dropdown' src={dropdown_icon} alt='' />
          <div className="dropdown">
            <p>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
