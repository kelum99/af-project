import React from 'react';
import MainLayout from '../../components/MainLayout';
import { Table, Space, Button, Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  }
];

const StudentManagement = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} />
          <Popconfirm placement="right" title={msg} okText="Yes" cancelText="No">
            <Button icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      )
    }
  ];
  const msg = 'Are you sure you want to delete user?';
  return (
    <MainLayout title={'Student Management'}>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </MainLayout>
  );
};

export default StudentManagement;
