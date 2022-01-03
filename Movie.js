import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({ year, title, summary, poster, genres }) {
    return (
        <div className="movie">
            <Link
            to={{
                pathname: './movie-detail',
                state: { year, title, summary, poster, genres },
            }}
            >
            <img src={poster} alt={title} title={title} />
        <div className="movie__date">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className='movie__genres'>
                {genres.map((genre, index)=>{
                    return <li key={index} className='movie__genre'>{genre}</li>
                })}
            </ul>
            <p className="movie__summary">{summary.slice(0,180)}...</p>
        </div>
        </Link>
     </div>
    );
}

Movie.propTypes = {  
    year: PropTypes.number.isRequired,   // API에서 year는 자료형이 Number, 반드시 있어야하니까 isRequired
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,  // poster에는 이미지 주소(문자열)가 저장
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}; 

export default Movie;