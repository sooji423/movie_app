import React from 'react'; //react 파일 불러옴
import axios from 'axios'
import Movie from './Movie' //같은 폴더 안에서 가져올때 ./


class App extends React.Component { 


  // 1
  state = {
    isLoading: true, //key: key value
    movies: [],
  }//state 선언
  //여기에 영화 20개 들어가 있어욤



  //async이 함수는 비동기 함수야. await 그래서 좀 기다려줘야해 > 항상 세트로 사용해야함.
  getMovies = async () => { 
    const {
      data: { 
        data: {movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count');
    //장르 애니메이션인데, 좋아요순으로 불러오겠다. 
    //console.log(movies, data, data.movies);
    //사용하고자 하는 실질적인 정보는 data, data.movies 안에 들어가 있기때문에 구조분해할당으로 바꿔줌
    this.setState({ movies: movies, isLoading: false }); //키랑 키값 이름이 동일하면 하나만 씀...movies: movies
  }
  //변수에 넣어주고 componentDidMount에서 호출해줌



  // 3
  componentDidMount() { //생명주기함수
    // setTimeout(() => { 
    //   this.setState({ isLoading : false });
    // }, 6000)
    //setState 값 바꿔줘 > render를 또다시 호출

    // axios.get('https://yts-proxy.now.sh/list_movies.json')
    //axios로 json파일 가져오겠다 : 데이터 가져올때 이렇게 쓰면 됩니다.

    this.getMovies();
    //this는 현재 클래스를 나타냄
  }
  


  // 2 , 4
  render() {
    const { isLoading, movies } = this.state //구조분해할당
    return (
      <div>{isLoading ? 'Loding...' :
        movies.map(movie => ( <Movie
          id={movie.id}
          title={movie.title}
          year={movie.year}
          summary={movie.summary}
          poster={movie.medium_cover_image}
          genre={movie.genre}
                                /> ))
       }</div >
    );
    //isLoading가 true이기때문에 Loding..실행 / false이면 We ard Ready!
    //render가 실행되고 나서 componentDidMount 실행 > 그래서 We ard Ready!
    //setState가 바뀌면 render 다시 실행됨.
  }
}

export default App;



