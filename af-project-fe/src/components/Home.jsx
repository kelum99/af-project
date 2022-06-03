import { Button } from "antd";
import React from "react";
import './ComponentsStyles.css';
import { navigate } from 'react-router-dom';



const Home = () => {
    let navigate = useNavigate();
    function handleClick() {
        navigate('/login/staff')
    }
    return(
<div>
<center>
    <h1>Research Project Management</h1>
    </center>
    <Button type="primary" htmlType="submit" className="staffBtn" onClick={handleClick}>STAFF</Button>
    <Button type="primary" htmlType="submit" className="studentBtn">STUDENT</Button>
</div>


    );
}

export default Home;