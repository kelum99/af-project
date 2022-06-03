import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StudentManagement from './pages/Admin/studentManagement';
import { StudentLogin, StaffLogin } from './components/Login';
import StaffReg from './pages/staff/staffReg';
import Accepettopics from './pages/staff/AcceptTopics';
import TopicEvaluation from './pages/staff/topicEvaluation';
import PresentationEvalution from './pages/staff/presentationEvaluation';
import MarkingSchema from './pages/Admin/markingSchema';
import StaffManagement from './pages/Admin/staffManagment';
import Resources from './pages/Admin/Resources';
import Registration from './pages/Student/Registration';
import TopicRegister from './pages/Students/topicRegister';
import Group from './pages/Students/Group';
import Home from './components/Home'
import RequestAccept from './pages/staff/requestAccept';
import ViewDetails from './pages/staff/ViewDetails';

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login/student" element={<StudentLogin />} />
        <Route path="/login/staff" element={<StaffLogin />} />
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
        <Route path="/Group" element={<Group />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/requestAccept" element={<RequestAccept />} />
        <Route path="/ViewDetails" element={<ViewDetails />} />
      </Routes>
    </>
  );
};
export default MainRouter;
