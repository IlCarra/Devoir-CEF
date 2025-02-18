import './App.css';
import CustomNavBar from './components/navbar';
import Footer from './components/footer';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Services from './pages/services';


function App() {
  return (
    <div className="App">
      <CustomNavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
