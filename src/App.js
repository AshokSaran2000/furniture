import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        
      </Routes>
      <Navbar/>
    </div>
    
  );
}

export default App;

