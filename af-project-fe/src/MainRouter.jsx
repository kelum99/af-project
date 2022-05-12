import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserManagement from './pages/Admin/userManagement';
import Login from './components/Login';
import MarkingScheme from './pages/Admin/markingScheme';
import StaffReg from './pages/Admin/Staff/staffReg';
import Accepettopics from './pages/Admin/Staff/AcceptTopics';


const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/usermanagement" element={<UserManagement />} />
        <Route path="/markingschemes" element={<MarkingScheme />} />
        <Route path="/staffreg" element={<StaffReg />} />
        <Route path="/accepttopic" element={<Accepettopics />} />
      </Routes>
    </>
  );
};
export default MainRouter;
