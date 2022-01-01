import axios from 'axios';
import React from 'react';
import Movie from './Movie';

class App extends React.Component {
    state = {
        isLoading: true,  // 로딩 중 표시기능
        movies: [],  // 로딩된 영화 데이터를 저장
    };
    getMovies = async () => {  // 자바스크립트에게 getMovies() 함수는 시간이 필요하고 
        const {
            data: {
                data: { movies },   // 점 연산자 순서대로 구조 분해 할당 적용
            },
        } = await axios.get("https://yts-proxy.now.sh/list_moviex.json?sort_by=rating");
                       // axios.get()의 실행을 기다려 달라고 말해주는 것
        this.setState({ movies, isLoading: false }); // ES6에서는 객체의 키와 대입할 변수의 이름이 같다면 코드를 축약할 수 있다.

    };

    // 로딩 현상 구현
    componentDidMount(){
        // 영화 데이터 로딩!
        // setTimeout(()=>{
        //     this.setState({isLoading: false});  // state를 바꾸려면 setState()
        // }, 6000);

        // axios로 API 호출
        // axios.get('https://yts-proxy.now.sh/list_movies.json');
        this.getMovies();
    }

    render(){
        const {isLoading, movies} = this.state;
        return ( <div>
         {isLoading
          ? 'Loading...' 
          : movies.map((movie)=>{
            return (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                />
            );
        })}
        </div>
        );
    }
}

export default App;
