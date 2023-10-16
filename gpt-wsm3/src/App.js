import './App.css';
import {Blog, Features, Footer, Header, Possibility, Whatgpt} from './Containers'
import {Brand, CTA, Navbar} from './Components'
function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <Whatgpt/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
