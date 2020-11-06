import React from 'react' //컴포넌트 이름은 대문자로 시작한다.

// function Macaron() {
//     return (
//         <h1>I Love macaron</h1>
//     );
// }

//class형 컴포넌트
class Macaron extends React.Component { 
    render() { 
        return (
            <h1>I Love macaron</h1>
        );
    }
}
export default Macaron;