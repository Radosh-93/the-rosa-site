import React from 'react';
import {Route} from "react-router";
import './App.scss';
import Footer from "components/Footer/Footer";
import Home from "components/pages/Home/Home";
import {Header} from "components/Header/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <Route exact path='/' render={() => <Home/>}/>
            <Footer/>
        </div>
    );
}

export default App;
