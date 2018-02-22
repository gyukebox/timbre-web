import React from 'react';

import { storiesOf } from '@storybook/react';

import Procedure from './Procedure';

storiesOf('Procedure', module)
  .add('First', () => <Procedure order={1} title='회원가입'
    description='당신은 누구인가요? 회원 유형을 선택해 주세요' />
  )
  .add('Second', () => <Procedure order={2} title='회원정보입력'
    description='아래에 정보를 입력 후, 가입하기 버튼을 누르면, 의뢰자 회원으로 가입됩니다.' />
  );