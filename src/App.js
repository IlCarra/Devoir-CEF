import './App.css';
import CustomNavBar from './components/navbar';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';


function App() {
  return (
    <div className="App">
      <CustomNavBar />
      <Routes>
        <Route path='/' element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
