import React, { useMemo } from 'react';
import { Menu, Button, Layout } from 'antd';
import './ComponentsStyles.css';
import {
  UserOutlined,
  FileAddOutlined,
  TeamOutlined,
  FileDoneOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useRequest from '../services/RequestContext';
import useUser from '../services/UserContext';

const AdminSlider = () => {
  const { Sider } = Layout;
  const { user, setUser } = useUser();
  const { UpdateToken } = useRequest();
  const navigate = useNavigate();
  const location = useLocation();

  const [collapsed, setCollapsed] = React.useState(false);
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  const logout = async () => {
    await UpdateToken(undefined);
    setUser({});
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
          {user && (
            <Menu.Item key={['/login/staff']}>
              <Link onClick={logout} to={'/login/staff'}>
                <LogoutOutlined />
                <span>Logout</span>
              </Link>
            </Menu.Item>
          )}
        </Menu>
      </Sider>
    </div>
  );
};

export default AdminSlider;
