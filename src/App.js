import { useState } from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.scss';

// rfce component
// function a page


function App() {
  const [ showNav, setShowNav ] = useState (false);

  

  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
