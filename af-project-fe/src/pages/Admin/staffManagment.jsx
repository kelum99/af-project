import React, { useState } from 'react';
import MainLayout from '../../components/MainLayout';
import { Table, Space, Button, Popconfirm, Select, Modal } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import StaffUpdateModal from './staffUpdateModal';

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

const StaffManagement = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);

  const { Option } = Select;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: 'Staff Id',
      dataIndex: 'staffId',
      key: 'staffId'
    },
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Mobile',
      dataIndex: 'mobile',
      key: 'mobile'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender'
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role'
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            onClick={() => {
              showModal();
            }}
          />
          <Popconfirm placement="right" title={msg} okText="Yes" cancelText="No">
            <Button icon={<DeleteOutlined />} />
          </Popconfirm>
          <Button icon={<PlusOutlined />} onClick={() => setIsModalVisible1(true)} />
        </Space>
      )
    }
  ];
  const msg = 'Are you sure you want to delete user?';
  return (
    <MainLayout title={'Staff Management'}>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
      <StaffUpdateModal visible={isModalVisible} onCancel={handleCancel} values={''} />;
      <Modal
        visible={isModalVisible1}
        onCancel={() => setIsModalVisible1(false)}
        title="Allocate Group">
        <Select placeholder="Select a group" showSearch style={{ width: 300 }} allowClear>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
      </Modal>
    </MainLayout>
  );
};

export default StaffManagement;
