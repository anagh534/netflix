import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import {originals,action, comady, romance, documentaries} from './urls'
import './App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title="Netflix Originals" url={originals}/>
      <RowPost title="Action" isSmall url={action}/>
      <RowPost title="Comady" isSmall url={comady}/>
      <RowPost title="Romance" isSmall url={romance}/>
      <RowPost title="Docmentaries" isSmall url={documentaries}/>
    </div>
  );
}

export default App;
