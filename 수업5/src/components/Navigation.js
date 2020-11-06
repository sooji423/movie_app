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
        </div>
    )
}

export default Navigation;
