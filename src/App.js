import './App.css';
import React from "react";
import { Routes, Route ,Navigate} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Menu from './Menu';
import Search from './Search';
import Error from './Error';

function App() {
  return (
    <div className="App">

      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About name="About" />} />
        <Route path='/contact' element={<Contact name="Contact" />} />
        <Route path='/search' element={<Search />} />
        {/*<Route path='*' element={<Error />} />*/}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

    </div>
  );
}

export default App;
