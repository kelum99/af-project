import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StudentManagement from './pages/Admin/studentManagement';
import Login from './components/Login';
import StaffReg from './pages/Admin/Staff/staffReg';
import Accepettopics from './pages/Admin/Staff/AcceptTopics';
import TopicEvaluation from './pages/staff/topicEvaluation';
import MarkingSchema from './pages/Admin/markingSchema';
import StaffManagement from './pages/Admin/staffManagment';
import Resources from './pages/Admin/Resources';
const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/usermanagement" element={<UserManagement />} />
        <Route path="/staffreg" element={<StaffReg />} />
        <Route path="/accepttopic" element={<Accepettopics />} />
        <Route path="/studentmanagement" element={<StudentManagement />} />
        <Route path="/topicEvaluation" element={<TopicEvaluation />} />
        <Route path="/markingschema" element={<MarkingSchema />} />
        <Route path="/staffmanagement" element={<StaffManagement />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </>
  );
};
export default MainRouter;
