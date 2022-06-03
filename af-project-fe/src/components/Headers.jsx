import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import { Link, useLocation } from 'react-router-dom';
import { createFromIconfontCN } from '@ant-design/icons';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
});
import {
  InstagramOutlined,
  FacebookOutlined,
  MailOutlined,
  StarTwoTone,
  PhoneOutlined
} from '@ant-design/icons';
import './ComponentsStyles.css';

export const StudentHeader = (props) => {
  const location = useLocation();
  return (
    <>
      <Layout>
        <Header
        
          style={{
            position: 'fixed',
            zIndex: 1,
            width: '100%'
          }}>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[location.pathname]}
            defaultSelectedKeys={['/topicregister']}
            style={{ fontSize: 16, fontWeight: 'bold' }}>
            <Menu.Item key={['/topicregister']}>
              <Link to={'/topicregister'}>Topic Register</Link>
            </Menu.Item>
            <Menu.Item key={['/group']}>
              <Link to={'/group'}>Groups</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout-background" style={{ padding: '80px 10px' }}>
          <div className="content-container">
            <div>{props.children}</div>
          </div>
        </Content>

        <Footer
          style={{
            //marginTop:'100px',
            height: '100px'
          }}>
          <h3 style={{ textAlign: 'center', marginTop: '30px' }}>
            Research Project Management Tool ©2022 Created by SLIIT
          </h3>

          <h3 style={{ marginTop: '-75px', marginLeft: '-25px' }}>Contact Us</h3>
          <div>
            <h4 style={{ marginTop: '-5px' }}>(+94)112098378</h4>
          </div>
          <div style={{ marginTop: '-30px', marginLeft: '-25px' }}>
            <PhoneOutlined />
          </div>

          <a>www.sliit.lk</a>
          <div style={{ marginTop: '-20px', marginLeft: '-25px' }}>
            <MailOutlined />
          </div>

          <h3 style={{ marginTop: '-75px', marginLeft: '1250px' }}>Social media</h3>
          <h4 href="www.facebook.com" style={{ marginLeft: '1275px', marginTop: '-10px' }}>
            Facebook
          </h4>
          <div style={{ marginTop: '-27px', marginLeft: '1250px' }}>
            <FacebookOutlined />
          </div>

          <h4 style={{ marginLeft: '1275px' }}>Instagram</h4>
          <div style={{ marginTop: '-26px', marginLeft: '1250px' }}>
            <InstagramOutlined />
          </div>
        </Footer>
      </Layout>
    </>
  );
};

export const StaffHeader = (props) => {
  const location = useLocation();
  return (
    <>
      <Layout>
        <Header
          style={{
            position: 'fixed',
            zIndex: 1,
            width: '100%'
          }}>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[location.pathname]}
            defaultSelectedKeys={['/presentationEvaluation']}
            style={{ fontSize: 16, fontWeight: 'bold' }}>
            <Menu.Item key={['/presentationEvalution']}>
              <Link to={'/presentationEvalution'}>Presentation Evalution</Link>
            </Menu.Item>
            <Menu.Item key={['/topicEvaluation']}>
              <Link to={'/topicEvaluation'}>Topic Evaluation</Link>
            </Menu.Item>
            <Menu.Item key={['/requestAccept']}>
              <Link to={'/requestAccept'}>Students Requests</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout-background" style={{ padding: '80px 10px' }}>
          <div className="content-container">
            <div>{props.children}</div>
          </div>
        </Content>

        <Footer
          style={{
            //marginTop:'100px',
            height: '100px'
          }}>
          <h3 style={{ textAlign: 'center', marginTop: '30px' }}>
            Research Project Management Tool ©2022 Created by SLIIT
          </h3>

          <h3 style={{ marginTop: '-75px', marginLeft: '-25px' }}>Contact Us</h3>
          <div>
            <h4 style={{ marginTop: '-5px' }}>(+94)112098378</h4>
          </div>
          <div style={{ marginTop: '-30px', marginLeft: '-25px' }}>
            <PhoneOutlined />
          </div>

          <a>www.sliit.lk</a>
          <div style={{ marginTop: '-20px', marginLeft: '-25px' }}>
            <MailOutlined />
          </div>

          <h3 style={{ marginTop: '-75px', marginLeft: '1250px' }}>Social media</h3>
          <h4 href="www.facebook.com" style={{ marginLeft: '1275px', marginTop: '-10px' }}>
            Facebook
          </h4>
          <div style={{ marginTop: '-27px', marginLeft: '1250px' }}>
            <FacebookOutlined />
          </div>

          <h4 style={{ marginLeft: '1275px' }}>Instagram</h4>
          <div style={{ marginTop: '-26px', marginLeft: '1250px' }}>
            <InstagramOutlined />
          </div>
        </Footer>
      </Layout>
    </>
  );
};
