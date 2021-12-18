import React from 'react';

// 짧은 코드로 작성할 수 있는 컴포넌트는 모두 App안에 작성한다. → import X, function로 시작
function Food({fav}){
    return <h1>I like {fav}</h1>;
}

// 서버에서 넘어온 데이터를 저장할 수 있도록 변수를 만든 다음 빈 배열을 할당
const foodILike = [];

function App() {
    return(
        <div>
         <h1>hi</h1>
        </div>
    );
}

export default App;
