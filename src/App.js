/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Santi from './components/demo/Demo';
//import Santi from './components/demo/Santi'

import {HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom';


function App() {
    return (
        <Router>
            <div className="App">

                <NavBar/>
                <Switch>
                    <Route path='/' exact component ={Home}/>
                    <Route path='/#' exact component ={Home}/>
                    <Route path='/personalweb' exact component ={Home}/>
                    <Route path='/home' exact component ={Home}/>
                    <Route path='/about' exact component ={About}/>
                    <Route path='/projects' exact component ={Projects}/>
                    <Route path='/contact' exact component ={Contact}/>
                    <Route path='/santi' exact component ={Santi}/>

                </Switch>
            </div>      
        </Router>
    );
}

export default App;
