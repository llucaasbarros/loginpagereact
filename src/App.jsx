import './App.css';
import Login from "./Components/Login/Login";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import React from 'react'; // Importa React para poder usar React.Fragment
import Home from './Components/Home/Home';


function App() {
  return (
    <div>
      <Navbar />
      <div className='App'><Home /></div>
      <Footer />
    </div>
  );
}

export default App;
