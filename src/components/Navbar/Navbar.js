import React, { Component } from 'react';

export const defaultNavbar = () => {
  return (
    <div id='navbar-black' className='navbar-top'>
      <div className='logo-home'>
        <a href='#'><img src='img/logo@3x.png' /></a>
      </div>

      <div className='navbar-links'>
        <ul id='recruit' className='horizontal-list'>
          <li>
            <a href='#'>성우 구하기</a>
          </li>
          <li>
            <a href='#'>구인 리스트</a>
          </li>
        </ul>
        <ul id='login' className='horizontal-list'>
          <li>
            <a href='#'>로그인</a>
          </li>
          <li>
            <a href='#'>회원가입</a>
          </li>
        </ul>
      </div>
    </div>
  );
};