import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

function Headers() {
    
    return(
        <>
<Layout>
    <Header
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
      }}
    >
      
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
      >
        <Menu.Item>Topic Register</Menu.Item>
        <Menu.Item>Groups</Menu.Item>
        </Menu>
    </Header>
    
    {/* <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Research Project Management Tool ©2022 Created by Ant UED
    </Footer> */}
  </Layout>
  </>
    );
}

export default Headers;