import React from 'react';

class App extends React.Component {
    state = {
        isLoading: true,  // 로딩 중 표시기능
        movies: [],  // 로딩된 영화 데이터를 저장
    };

    // 로딩 현상 구현
    componentDidMount(){
        // 영화 데이터 로딩!
        setTimeout(()=>{
            this.setState({isLoading: false});  // state를 바꾸려면 setState()
        }, 6000);
    }

    render(){
        const {isLoading} = this.state;
        return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
    }
}

export default App;
