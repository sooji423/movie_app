import React from 'react'; //react 파일 불러옴
import Macaron from './Macaron';
import Soot from './Soot';
import PropTypes from 'prop-type';

//import 자식컴포넌트 from '자식컴포넌트.js' (기본구조)

//* 객체{} > 이렇게 해주면 객체입돠 : 부모에서 자식으로 전달될때 객체형태로 전달됩니다 *

// function Food(props) { //자식컴포넌트
//   return (
//     <h1>I Like {props.propsName}</h1> //객체 > 객체 형태로 전달
//   );
// }//컴포넌트 안에 자식컴포넌트 또 만들 수 있어요
//부모컴포넌트에서 props 프로프스를 정의해줘야해요 > props 전달 (부모 > 자식)


// function Food(props) { //자식컴포넌트 > 구조 분해 할당(1번을 좀 더 간단하게 사용하는 방법)
//   const {propsName} = props;
//   return (
//     <h1>I Like {propsName}</h1>
//   );
// }

// function Food({propsName}) { //자식컴포넌트  > 구조 분해 할당(1번을 좀 더 간단하게 사용하는 방법)
//   return ( //객체로 저장해서 객체로 내보냄
//     <h1>I Like {propsName}</h1>
//   );
// }


function Food({propsname, propsrating, propsimage}) { //부모에 객체를 전달 받은 자식 = props로 넘겨줌
  return (
    <div>
      <h1>I Love {propsname}</h1>
      <h2>{propsrating}/5.0</h2>
      <img src={propsimage} alt={propsname}></img>
    </div>
  );
}
//여기서 props는 객체의 정보들 = 속성값 / props는 배달부 역할


//서버에서 가져온 데이터를 저장하는 변수
//const foodLike = [];
const foodLike = [
  {
    id: 1,
    name: 'macaron1',
    image: 'https://i.pinimg.com/236x/82/18/a4/8218a40cf4b9a575878a4c864dbbcc68.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'macaron2',
    image: 'https://i.pinimg.com/236x/0f/85/0c/0f850c4ea23a6060ffdab4a5d9ea873f.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'macaron3',
    image: 'https://i.pinimg.com/236x/c7/d1/df/c7d1dfb896cbe25abe7c4f132d9c3273.jpg',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'macaron4',
    image: 'https://i.pinimg.com/236x/60/ad/7d/60ad7dde9b3a912b6153f02d1c0c328e.jpg',
    rating: 5,
  },
  {
    id: 5,
    name: 'macaron5',
    image: 'https://i.pinimg.com/236x/a7/7d/47/a77d47b2259180676c2663922fd2cb87.jpg',
    rating: 4.1,
  }

]


function App() { //부모컴포넌트
  return (
    <>
      <div >안녕하세요</div >
      <Macaron />
      {/* <Food propsName={"macaron"} /> */}
      {foodLike.map(dish => (
                              <Food
                                propsname={dish.name}
                                propsrating={dish.rating}
                                propsimage={dish.image} />))}
                            </>
                            
  );
  //map이라는 함수 사용 = dish > foodLike객체. 배열에 있는 갯수만큼 실행
  //map()함수 - 배열의 모든 원소마다 특정 작업을 하는 함수를 적용하고, 그 함수가 반환한 결과를 모아서 배열로 반환.
  //proms (데이타) 이름이 자식컴포넌트에 전달 되는거에요~~~
  //propsname={dish.name} 택배상자라 생각하믄 됩니다~~~
}

export default App;



// <Food
//   propsName="coffee"
//   propsName2={true}
//   propsName3={['coffee',1,2,3,false]}
// />


//class형 컴포넌트
// class App extends React.Component { //조상컴포넌트에서 상속받겠다
//   render() { 
//     return (
//     <>
//     <div >안녕하세요</div >
//     <Macaron />
//       <Soot />
//       <Food propsName={"coffee"} />
//       <Food propsName="tea" />
//       <Food propsName="latte" />
//       <Food propsName="ice coffee" />
//     </>

//     );
//   }
// }
// export default App;

// function App() { //부모컴포넌트
//   return (
//     <>
//     <div >안녕하세요</div >
//      <Macaron />
//        <Soot />
//        <Food propsName={"coffee"} />
//        <Food propsName="tea" />
//        <Food propsName="latte" />
//        <Food propsName="ice coffee" />
//     </>
//   );
//   //div가 2개가 되면 ()로 묶어줘야함
//   //문자열을 제외하고는 중괄호 해줘야해요 / propsName > 어떤 이름을 사용해도 됩니다
//   //propsName="coffee" > 속성이름 = "속성값" 으로 자식에 전달
// }
// // 이건 HTML태그 아니에요 > JSX 임!!! - 가장 기본모양
// //Food 같이 내용이 별로 없는건 따로 파일 만들지 않고 쓸 수 있음. 부모에서 > 자식으로만 전달.

// export default App;
// // 얘를 'App'이름으로 다른곳에서 쓸수 있게 바깥으로 내보내겠다
// // 함수형 컴포넌트



//다시 연습...근데 안되네..? 왜 안되는거져!!!

//props 배달부
// function Food({propsid, propsname, propsimage}) { //부모에 객체를 전달 받은 자식
//   return (
//     <div>
//       <h1>cake No.{propsid}</h1>
//       <h2>{propsname}</h2>
//       <img src={propsimage} alt={propsname} />
//     </div>
//   );
// }


// //서버에서 가져온 데이터를 저장하는 변수
// const cakes = [
//   {
//   id: 1,
//   name: 'Rainbow Cake',
//   image:'https://i.pinimg.com/236x/dc/e3/2e/dce32e513ce557a951cbbe7fe15f10cb.jpg',
//   },
  
//   {
//   id: 2,
//   name: 'MINI RED VELVET CAKES',
//   image:'https://i.pinimg.com/236x/06/95/6d/06956d52a74ac9039bebb754bba20bdc.jpg',
//   },
  
//   {
//   id: 3,
//   name: 'Lemon Bar Cake',
//   image:'https://i.pinimg.com/236x/d2/d9/2e/d2d92e471b8007dabda2f6748a1e80df.jpg',
// }
// ]


// function App() { //부모컴포넌트
//   return (
//     <>
//       <div >안녕하세요</div >
//       <Macaron />
//       {/* <Food propsName={"macaron"} /> */}
//       {cakes.map(cake => (
//                            <Food
//                               propsid={cake.id}
//                               propsname={cake.name}
//                               propsimage={cake.image} />))}
                              
//                             </>                          
//   );
// }


// //잘못된걸 확인하기위해 지정해줌
//npm install  porp-types 터미널에서 설치해줘야함 *
// Food.PropTypes = {
//   propsid: PropTypes.number.isRequired,
//   propsname: PropTypes.string.isRequired, //아이디랑 네임은 필수로 입력
//   propsimage: PropTypes.string
// }


// export default App;



