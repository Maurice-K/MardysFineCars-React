import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
