import './App.css';
import CustomNavBar from './pages/navbar';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/apropos';

function App() {
  return (
    <div className="App">
      <CustomNavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apropos' element={<About />} />

      </Routes>
    </div>
  );
}

export default App;
