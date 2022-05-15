import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserManagement from './pages/Admin/userManagement';
import Login from './components/Login';

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/usermanagement" element={<UserManagement />} />
      </Routes>
    </>
  );
};
export default MainRouter;
