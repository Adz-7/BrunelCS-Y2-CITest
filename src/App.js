  
import React from 'react'; 
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import "./styles/App.css"
import LandingPage from './components/LandingPage';
import Events from './Events';
import {Route, Link} from 'react-router-dom';

function App() {
  

  return (
    <div className="App">
  <Nav/>
<Route exact path='/'component={LandingPage} />
<Route exact path='/events'  component={Events} />
<Footer/>
</div>
  );
}


export default App;