import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserManagement from './pages/Admin/userManagement';
import Login from './components/Login';
import TopicEvaluation from './pages/staff/topicEvaluation';

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/usermanagement" element={<UserManagement />} />
        <Route path="/topicEvaluation" element={<TopicEvaluation />} />
      </Routes>
    </>
  );
};
export default MainRouter;
