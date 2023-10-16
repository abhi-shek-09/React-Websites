import React from 'react';

import { Footer, Blog, Possibility, Features, Whatgpt, Header } from './Containers';
import { CTA, Brand, Navbar } from './Components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <Whatgpt />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;