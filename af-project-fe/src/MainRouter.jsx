import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserManagement from './pages/Admin/userManagement';
import Login from './components/Login';
import MarkingScheme from './pages/Admin/markingScheme';
import TopicEvaluation from './pages/staff/topicEvaluation';
import PresentationEvalution from './pages/staff/presentationEvaluation'

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/usermanagement" element={<UserManagement />} />
        <Route path="/markingschemes" element={<MarkingScheme />} />
        <Route path="/topicEvaluation" element={<TopicEvaluation />} />
        <Route path="/presentationEvalution" element={<PresentationEvalution />} />
      </Routes>
    </>
  );
};
export default MainRouter;
