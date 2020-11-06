import React from 'react';
// 자바스크립트처럼 이렇게 꽂아서 사용할 수 있음 import 사용 : 불러와야함
import ReactDOM from 'react-dom';
import App from './App';
// 같은 폴더 안에 있을때 ./ 사용 (길게 표시하기 힘드니까 짧게 표시하겠다)


ReactDOM.render( //render 그리는 함수
  // 이런 구조를 화면에 그려라 누구를? <App /> 어디다? document.getElementById('root') 아이디가 root인 컴포넌트를 그려라
    <App />,
  document.getElementById('root') //index.html > <div id="root"></div> 여기에 그려넣어라.
); //요게 가장 중요해요 : index.js가 중간역할을 해요. 

