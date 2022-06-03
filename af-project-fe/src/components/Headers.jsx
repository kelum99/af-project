import React from 'react';
import { Layout, Menu, Breadcrumb, Space } from 'antd';
const { Header, Content, Footer} = Layout;
import { Link, useLocation } from 'react-router-dom';
import { createFromIconfontCN } from '@ant-design/icons';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
import { StarOutlined, StarFilled, StarTwoTone, PhoneOutlined } from '@ant-design/icons';



export const StudentHeader = (props) => {
  const location = useLocation();
  return (
    <>
      <Layout>
        <Header
          style={{
            position: 'fixed',
            zIndex: 1,
            width: '100%',
           
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
            <Menu.Item key={['/student']}>
              <Link to={'/student'}>Student</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout-background" style={{ padding: '0 24px 24px' }}>
          <div className="content-container">
            <div>{props.children}</div>
          </div>
        </Content>

        <Footer
      style={{
        //marginTop:'100px',
        height:'50px',
      }}
    >
      
      
       
       
     <h3 style={{textAlign:'center'}}>Research Project Management Tool ©2022 Created by Ant UED</h3>
     
       <h4>0112098378</h4>
       <div>
     <PhoneOutlined />
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
        <Content className="site-layout-background" style={{ padding: '0 24px 24px' }}>
          <div className="content-container">
            <div>{props.children}</div>
          </div>
        </Content>

        <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Research Project Management Tool ©2022 Created by Ant UED
    </Footer>
      </Layout>
    </>
  );
};




