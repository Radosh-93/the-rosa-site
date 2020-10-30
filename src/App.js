import React from 'react';
import {Route} from "react-router";
import './App.scss';
import Footer from "components/Footer/Footer";
import Home from "components/pages/Home/Home";
import {Header} from "components/Header/Header";
import ComingSoon from "components/pages/OtherPages/ComingSoon";

function App() {
    return (
        <div className="App">
            <Header/>
            <Route exact path='/' render={() => <Home/>}/>
            <Route exact path='/menu' render={() => <ComingSoon/>}/>
            <Route exact path='/reservation' render={() => <ComingSoon/>}/>
            <Route exact path='/new' render={() => <ComingSoon/>}/>
            <Route exact path='/shop' render={() => <ComingSoon/>}/>
            <Route exact path='/contact' render={() => <ComingSoon/>}/>
            <Footer/>
        </div>
    );
}

export default App;
