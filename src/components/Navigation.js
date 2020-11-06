import React from 'react'
import { Link } from 'react-router-dom';
//링크를 통해서 이동함....
import './Navigation.css';
//같은 폴더안에 있으니께..


function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {/* <Link to={{ pathname: '/about', state: {fromNavigation: true}}}>About</Link> 
            > 이런식으로 정보전달 해줄 수 있다고 하는데 뭔말이징...ㅜ ㅜ */}
        </div>
    )
}

export default Navigation;
