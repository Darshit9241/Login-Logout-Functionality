import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import Home from './home/Home';
import LogIn from './login/LogIn';
import SignUp from './signin/SignUp';
import About from './about/About';

const PrivateRoute = () => {
  const token = localStorage.getItem('loggin');
  return token ? <Outlet /> : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path='/' index element={<Home />} />
          <Route path='/about' index element={<About />} />
        </Route>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
