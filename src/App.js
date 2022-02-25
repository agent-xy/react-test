import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.scss';
import Footer from './components/Footer';
import NewAnime from './pages/NewAnime';

// rfce component
// function a page


function App() {
  const [ showNav, setShowNav ] = useState (false);

  

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/react-test/'>
            <Home />
          </Route>
          <Route path='/react-test/new-anime'>
            <NewAnime />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
