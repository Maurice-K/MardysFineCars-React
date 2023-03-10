import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  )
}

export default App
