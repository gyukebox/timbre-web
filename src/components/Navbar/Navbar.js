import React, { Component } from 'react';
import './Navbar.css';
import img from './logo.png';

const Logo = () => {
  return (
    <div className='logo-home'>
      <a href='#'><img src={img} /></a>
    </div>
  );
};

const NavbarLeftLink = () => {
  return (
    <ul id='recruit' className='horizontal-list'>
      <li><a href='#'>성우 구하기</a></li>
      <li><a href='#'>구인 리스트</a></li>
    </ul>
  );
};

const NotLoggedInNavbarRight = () => {
  return (
    <ul id='not-logged-in' className='horizontal-list'>
      <li><a href='#'>로그인</a></li>
      <li><a href='#'>회원가입</a></li>
    </ul>
  );
};

const LoggedInNavbarRight = () => {
  return (
    <ul id='logged-in' className='horizontal-list'>
      <li>알림</li>
      <li>김브레 님</li>
    </ul>
  );
};

const Navbar = ({ backgroundColor, status }) => {
  return (
    <div id='navbar' className={backgroundColor}>
      <div className='navbar-wrapper'>
        <Logo />
        <div className='navbar-links'>
          <NavbarLeftLink />
          {status === 'not-logged-in' ? <NotLoggedInNavbarRight /> : <LoggedInNavbarRight />}
        </div>
      </div>
    </div>
  );
};

Navbar.defaultProps = {
  backgroundColor: 'black',
  status: 'not-logged-in'
};

export default Navbar;