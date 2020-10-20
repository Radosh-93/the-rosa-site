import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero'
import OurStory from "./components/OurStory/OurStory";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <OurStory/>
    </div>
  );
}

export default App;
