import React from 'react';
import PropTypes from 'prop-types'

function Movie({ id, title, year, summary, poster }) { 
    return (
        <div>
            <img src={poster} alt={title} title={title} />
            <h1>{title}</h1>
            <h2>{year}</h2>
            <p>{summary.slice(0, 180)} ...</p>
    </div>
    );
    //slice(0,180) 글자를 0부터 180 직전까지 summary에서 추출하겠다
}

Movie.propTypes = {
    id : PropTypes.number.isRequired, //꼭 들어가야할것 지정, 필수항목 - 잘못들어가있으면 에러남.
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
}; 

export default Movie;
 
