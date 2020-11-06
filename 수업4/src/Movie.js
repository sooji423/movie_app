import React from 'react';
import PropTypes from 'prop-types'
//모듈을 사용할때는 이렇게.
import './Movie.css';
//그냥 파일만 불러올땐 이렇게.

function Movie({ id, title, year, summary, poster, genres }) { 
    return (
        <div className = "movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie_data">
                <h3 className="movie_title" style={{ backgroundColor: '#eee' }}>{title}</h3>
                <h4 className="movie_year">{year}</h4>
                <ul className="movie_genres">
                    {genres.map((genre, index) => {
                        return (
                            <li key={index} className="movie_genre">{genre}</li>
                        );
                    })}
                </ul>
            <p className="movie_summary">{summary.slice(0, 180)} ...</p>
            </div>
    </div>
    );
    //slice(0,180) 글자를 0부터 180 직전까지 summary에서 추출하겠다
    //jsx문법 backgroundColor > 파이프 없이.
    //style={{ backgroundColor: '#eee' }} 객체이기때문에 이렇게 더블블록으로 넣어줘야함.
    //{genres.map(genre,index)} 배열 genres S붙여주고, 하나하는 genre / 인덱스번호도 받아줘야함
}

Movie.propTypes = {
    id : PropTypes.number.isRequired, //꼭 들어가야할것 지정, 필수항목 - 잘못들어가있으면 에러남.
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
}; 

export default Movie;
 
