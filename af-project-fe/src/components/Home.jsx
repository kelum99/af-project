import { Button } from 'antd';
import React from 'react';
import './ComponentsStyles.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <center>
        <h1>Research Project Management</h1>
      </center>
      <Button
        type="primary"
        htmlType="submit"
        className="staffBtn"
        onClick={() => navigate('/login/staff')}>
        STAFF
      </Button>
      <Button
        type="primary"
        htmlType="submit"
        className="studentBtn"
        onClick={() => navigate('/login/student')}>
        STUDENT
      </Button>
    </div>
  );
};

export default Home;
