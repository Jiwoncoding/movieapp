import React from 'react';
import PropTypes from 'prop-types';

function Movie({ id, year, title, summary, poster }) {
    return (<h4>{ title }</h4>);
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,   // API에서 id는 자료형이 Number, 반드시 있어야하니까 isRequired
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,  // poster에는 이미지 주소(문자열)가 저장
}; 

export default Movie;