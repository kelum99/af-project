import React, { useState } from 'react';
import MainLayout from '../../components/MainLayout';
import { Table, Space, Button, Popconfirm, Form, Input } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import './AdminStyles.css';
import Modal from 'antd/lib/modal/Modal';

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

const MarkingSchema = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsEdit(false);
  };

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
          <Button
          
            onClick={() => {
              setIsEdit(true);
              showModal();
            }}
          />
          <Popconfirm placement="right" title={msg} okText="Yes" cancelText="No">
            <Button icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      )
    }
  ];
  const msg = 'Are you sure you want to delete user?';
  return (
    <MainLayout title={'Marking Schema'}>
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        width={800}
        title={isEdit ? 'Edit Marking Schema' : 'Add Marking Schema'}
        footer={null}>
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 20 }}
          autoComplete="off"
          style={{ width: '80%' }}>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please input title!' }]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please input your Description!' }]}>
            <Input.TextArea />
          </Form.Item>

          {!isEdit && (
            <Form.Item label="Created By" name="createdby">
              <Input />
            </Form.Item>
          )}

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              {isEdit ? 'Update' : 'Create'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <div>
        <Button type="primary" onClick={showModal} style={{ marginBottom: 20 }}>
          Add Marking Schema
        </Button>
        <Table columns={columns} dataSource={data} />
      </div>
    </MainLayout>
  );
};

export default MarkingSchema;
