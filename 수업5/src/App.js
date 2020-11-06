import React from 'react'
import './App.css';
import { HashRouter, Route } from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';


function App() { 
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}
export default App;

//홈이랑 어바웃 같이 나오는데(/about) 홈이 나오지 않게 하기 위해 exact={true} 값을 넣어줌
