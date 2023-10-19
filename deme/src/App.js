import React from 'react';
import { Navbar, Header } from './components';
import './App.css';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='exp' dir="rtl">
        <section>
          <Header img = {img1}/>
        </section>
        <section>
          <Header img = {img2}/>
        </section>
      </div>
    </div>
  );
}

export default App;
