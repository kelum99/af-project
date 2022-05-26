import React, { useMemo } from 'react';
import { Menu, Button, Layout } from 'antd';
import './ComponentsStyles.css';
import { UserOutlined, FileAddOutlined, TeamOutlined, FileDoneOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const AdminSlider = () => {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = React.useState(false);
  const location = useLocation();

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <Sider
        width={200}
        style={{
          minHeight: '1080px',
          background: '#001529'
        }}
        className="site-layout-background"
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}>
        <Menu
          mode="inline"
          theme="dark"
          defaultSelectedKeys={['/studentmanagement']}
          selectedKeys={[location.pathname]}>
          <Menu.Item key={['/studentmanagement']}>
            <Link to={'/studentmanagement'}>
              <UserOutlined />
              <span>Student Management</span>
            </Link>
          </Menu.Item>

          <Menu.Item key={['/staffmanagement']}>
            <Link to={'/staffmanagement'}>
              <TeamOutlined />
              <span>Staff Management</span>
            </Link>
          </Menu.Item>

          <Menu.Item key={['/markingschema']}>
            <Link to={'/markingschema'}>
              <FileDoneOutlined />
              <span>Marking Schema</span>
            </Link>
          </Menu.Item>

          <Menu.Item key={['/resources']}>
            <Link to={'/resources'}>
              <FileAddOutlined />
              <span>Resources</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
};

export default AdminSlider;
