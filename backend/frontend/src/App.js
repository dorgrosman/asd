import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/HomePage';
import { ToastContainer } from 'react-toastify';
import Register from './pages/RegisterPage';
import Login from './pages/LoginPage';
import Header from './components/Header/Header';
import FriendsList from './pages/FriendsListPage';
import './assets/scss/global.scss';

function App() {
  

  return (
    <>
      <Router>
        <div className="container ">
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/friends-list' element={<FriendsList />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
