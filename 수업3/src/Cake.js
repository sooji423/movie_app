//Cake 클래스형 컴포넌트
//<h1> cake 가격 : eX)만원 </h1>
//<h2>할인가격 : </h2>
//버튼 누르면 할인 가격 나오도록 30% 할인

import React from 'react';
//얘를 먼저 불러옴

//state 값을 바꿀 수 있음 > 사용하려면 setState 사용해야함.
class Cake extends React.Component {

    state = {
        price: 10000,
        discounPrice: 0,
    };

    discount = () => { 
        console.log('할인하기');
        this.setState(current => ({ //current는 this.state
            discounPrice: current.price * 0.7,
        }));
    }


    render() {
        return (
            <div>
                <h1>치즈케이크 가격은 {this.state.price} 입니다</h1>
                <h2>30% 할인가격은 {this.state.discounPrice} 입니다</h2>
                <button onClick={this.discount}>할인</button>
            </div>
        );
    }
    
}

export default Cake;


