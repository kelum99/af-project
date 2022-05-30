import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StudentManagement from './pages/Admin/studentManagement';
import Login from './components/Login';
import StaffReg from './pages/staff/staffReg';
import Accepettopics from './pages/staff/AcceptTopics';
import TopicEvaluation from './pages/staff/topicEvaluation';
import PresentationEvalution from './pages/staff/presentationEvaluation'
import MarkingSchema from './pages/Admin/markingSchema';
import StaffManagement from './pages/Admin/staffManagment';
import Resources from './pages/Admin/Resources';
import Registration from './pages/Student/Registration';
import TopicRegister from './pages/Students/topicRegister';

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/staffreg" element={<StaffReg />} />
        <Route path="/accepttopic" element={<Accepettopics />} />
        <Route path="/studentmanagement" element={<StudentManagement />} />
        <Route path="/topicEvaluation" element={<TopicEvaluation />} />
        <Route path="/presentationEvalution" element={<PresentationEvalution />} />
        <Route path="/markingschema" element={<MarkingSchema />} />
        <Route path="/staffmanagement" element={<StaffManagement />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/studentregistration" element={<Registration />} />
        <Route path="/topicregister" element={<TopicRegister />} />
      </Routes>
    </>
  );
};
export default MainRouter;
