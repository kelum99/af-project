import React, { useMemo } from 'react';
import { Menu, Button, Layout } from 'antd';
import './ComponentsStyles.css';
import { UserOutlined, PieChartOutlined, FileDoneOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const AdminSlider = (selectedKey, openKeys) => {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = React.useState(false);
  const location = useLocation();

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  const SiderKeys = useMemo(() => {
    const list = location.pathname.split('/');
    return {
      selectedKeys: list.length > 2 ? list[2] : list[1],
      openKeys: list.length > 2 ? list[1] : ''
    };
  }, [location]);

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
        <Menu mode="inline" theme="dark" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
          <Menu.Item key={['1']}>
            <Link to={'/usermanagement'}>
              <UserOutlined />
              <span>User Management</span>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <PieChartOutlined />
            <span>Option 3</span>
          </Menu.Item>
          <Menu.Item>
            <PieChartOutlined />
            <span>Option 4</span>
          </Menu.Item>
          <Menu.Item>
            <PieChartOutlined />
            <span>Option 5</span>
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
};

export default AdminSlider;
