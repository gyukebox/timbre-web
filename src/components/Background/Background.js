import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Background.css';
import img1 from './bg-01.png';
import img2 from './bg-02.png';
import contents from './contents.png';


const HeaderProps = [
  {
    firstRow: '당신이 찾던',
    secondRowLeft: '그 ',
    boldText: '목소리',
    secondRowRight: '를 구해보세요.'
  },
  {
    firstRow: '팀브레에서는',
    secondRowLeft: '누구나 ',
    boldText: '보이스 크리에이터',
    secondRowRight: '입니다.'
  }
];

const ContentProps = [
  {
    firstRow: '첫번째 문단의 메인 화면',
    secondRow: '배경사진이 좀 어둡다. 하지만 이쁘다.'
  },
  {
    firstRow: '두번째 문단의 메인 화면',
    secondRow: '배경사진이 더 밝다. 그래서 더 이쁘다.'
  }
];

const Header = ({ firstRow, secondRowLeft, boldText, secondRowRight }) => {
  return (
    <div id='main-header'>
      <h1>{firstRow}</h1>
      <h1>{secondRowLeft}<strong>{boldText}</strong>{secondRowRight}</h1>
    </div>
  );
};

const MainContent = ({ firstRow, secondRow }) => {
  return (
    <div id='main-content'>
      <p>{firstRow}</p>
      <p>{secondRow}</p>
    </div>
  );
};

const Background = ({ type, loggedIn }) => {
  const index = type - 1;

  const firstRowText = HeaderProps[index].firstRow;
  const secondLeftText = HeaderProps[index].secondRowLeft;
  const boldText = HeaderProps[index].boldText;
  const secondRightText = HeaderProps[index].secondRowRight;

  const firstParagraph = ContentProps[index].firstRow;
  const secondParagraph = ContentProps[index].secondRow;

  const Background = type === 1 ? img1 : img2;

  const style = {
    backgroundImage: `url(${Background})`,
    color: '#ffffff',
  };

  return (
    <div style={style} className="bgimg">
      <Navbar backgroundColor='transparent'
        status={loggedIn ? 'logged-in' : 'not-logged-in'} />

      <Header firstRow={firstRowText} secondRowLeft={secondLeftText}
        boldText={boldText} secondRowRight={secondRightText} />

      <MainContent firstRow={firstParagraph} secondRow={secondParagraph} />

      <div id="to-content-page">
        <a href="#">
          <img src={contents} className="contents" />
        </a>
      </div>

    </div>
  );
};


export default Background;