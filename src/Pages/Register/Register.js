import React, { Component } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Procedure from '../../components/Procedure/Procedure';

import './Register.css';
import clientGrey from './client-grey.png';
import clientPink from './client-pink.png';
import creatorGrey from './creator-grey.png';
import creatorPink from './creator-pink.png';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientEnabled: false,
      creatorEnabled: false
    };
  }

  render() {
    return (
      <div className='content'>
        <Navbar />
        <Procedure order={1} title='회원가입'
          description='당신은 누구인가요? 회원 유형을 선택해 주세요' />
      </div>
    );
  }
}

export default Register;