import { Button, Carousel } from 'antd';
import React from 'react';
import './ComponentsStyles.css';
import { useNavigate } from 'react-router-dom';

const home = new URL('../public/home.svg', import.meta.url);
const logo = new URL('../public/login.svg', import.meta.url);

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-container">
        <div>
          <center>
            <h1 style={{ fontSize: '28px' }}>Welcome!</h1>
          </center>

          <h1 style={{ fontSize: '40px', color: '#0066ff' }}>
            Online Research Project Management Application
          </h1>
        </div>
        <div>
          <center>
            <h2 style={{ fontSize: '28px' }}>Are You?</h2>
          </center>
          <Button
            type="primary"
            htmlType="submit"
            className="loginBtns"
            onClick={() => navigate('/login/staff')}>
            STAFF
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            className="loginBtns"
            onClick={() => navigate('/login/student')}>
            STUDENT
          </Button>
        </div>
      </div>
      <div>
        <center>
          <Carousel autoplay style={{ width: '75%', marginTop: 25 }}>
            <div>
              <img src={home} />
            </div>
            <div>
              <img src={logo} />
            </div>
            <div>
              <img src={home} />
            </div>
            <div>
              <img src={logo} />
            </div>
          </Carousel>
        </center>
      </div>
    </div>
  );
};

export default Home;
