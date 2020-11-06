import React from 'react'; //react 파일 불러옴
import Cake from './Cake';

//class형 컴포넌트
//state를 사용하기 위해 class형 컴포넌트 사용
class App extends React.Component { 

  //리액트 생명주기 함수
  constructor(props) { //제일먼저 실행되는 함수 > 그다음 render
    super(props);
    console.log('constructor함수는 클래스형 컴포넌트가 생성할때 호출됨')
  }
  
  componentDidMount() {
    console.log('componentDidMount 함수는 컴포넌트가 처음 화면에 그려지면 실행되는 함수')
  }


  componentDidUpdate() {
    console.log('componentDidUpdate 함수는 화면이 새로 그려지면 즉 업데이트되면 실행되는 함수')
  }

  componentWillUnmount() { 
    console.log('componentWillUnmount함수는 컴포넌트가 죽을때 실행되는 함수')
  }


  state = {
    count: 0,
    sum: 0,
    avg: 0,
  };

  // add = () => {
  //   console.log('더하기');
  //   this.setState({ count: this.state.count + 1 });
  // }

  //요게 더 좋음 (함수형식으로)
  add = () => {
    console.log('더하기');
    this.setState(current => ({ //current는 this.state
      count: current.count + 1, //count = 0, 0 에 + 1 해줘
      sum: current.sum + 1,
      avg: current.avg + 1,
    }));
    }
  //실행문이 막바로 들어가는것보다, 함수로 넣어주는것이 좋음
  //current에는 this.state가 들어옴!!!



  // minus = () => {
  //   console.log('빼기');
  //  this.setState({ count: this.state.count - 1 });
  // }
  //   setState()함수가 동작하면 > state가 새로운 값으로 바뀌고
  // > 이어서 render() 함수를 동작시켜 > 화면을 업데이트 시킴

  minus = () => {
    console.log('빼기');
    this.setState(current => ({
      count: current.count - 1
    }));
  }
  
  
  
  //렌더가 한번 더 실행되어야 바뀜 > 다시 적용해줘야 바뀜
  //setState()함수를 사용해서 state값을 변경해야함!!!
  render() { 
    return (
      <>
      <div>
      <h1>현재 숫자는 {this.state.count} 입니다</h1>
      <button onClick={this.add}>더하기</button>
      <button onClick={this.minus}>빼기</button>
        </div>
        
        <Cake />
        </>
    );
  }

}

export default App;



