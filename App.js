import axios from 'axios';
import React from 'react';

class App extends React.Component {
    state = {
        isLoading: true,  // 로딩 중 표시기능
        movies: [],  // 로딩된 영화 데이터를 저장
    };
    getMovies = async () => {  // 자바스크립트에게 getMovies() 함수는 시간이 필요하고 
        const movies = await axios.get("https://yts-proxy.now.sh/list_moviex.json");
                       // axios.get()의 실행을 기다려 달라고 말해주는 것
    }

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
        const {isLoading} = this.state;
        return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
    }
}

export default App;
