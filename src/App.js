import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Landing from './pages/Landing/index';
import Dashboard from './pages/Dashboard/index';
import UserProfile from './pages/UserProfile/index';
import Nav from './components/Nav';
import { useDispatch } from 'react-redux';
import { getUsers } from './redux/Users/actions';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [])
  

  return (
    <div className="">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="users">
            <Route path=":id" element={<UserProfile />} />
          </Route>
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

