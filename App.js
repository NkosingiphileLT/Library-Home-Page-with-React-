import './App.css';
import Discounted from './components/Discounted';
import Explore from './components/Explore';
import Highlights from './components/Highlights';
import Nav from './components/Nav';
import Landing from './components/landing';
import Featured from './components/ul/Featured';
import Footer from "./components/Footer"


function App() {

  return (
      <div className="App">
        <Nav />
        <Landing/>
        <Highlights/>
        <Featured/>
        <Discounted/>
        <Explore/>
        <Footer/>
      </div>
  );
}

export default App;
