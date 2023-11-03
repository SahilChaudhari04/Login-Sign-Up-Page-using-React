import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
// import Login from './components/Login';


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='*' element={<Login />} />
        <Route path='Login' element={<Login />} />
        <Route path='SignUp' element={<SignUp />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App;
