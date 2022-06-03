import React, { useState, useEffect } from 'react';
import MainLayout from '../../components/MainLayout';
import { Table, Space, Button, Popconfirm, Select, Modal, message, Form, Input } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import useRequest from '../../services/RequestContext';

const StaffManagement = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(undefined);
  const { request } = useRequest();

  const { Option } = Select;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setSelected(undefined);
    setIsModalVisible(false);
  };

  const getStaff = async () => {
    try {
      const res = await request.get('staff');
      if (res.status === 200) {
        setData(res.data);
      } else {
        message.error('Data fetch failed!');
      }
    } catch (e) {
      console.log('err', e);
    }
  };

  const deleteStaff = async (id) => {
    try {
      const res = await request.delete(`staff/${id}`);
      if (res.status === 200) {
        message.success('Successfully Removed!');
        getStaff();
      } else {
        message.error('Failed!');
      }
    } catch (e) {
      console.log('err', e);
    }
  };

  const updateStaff = async (values) => {
    try {
      const res = await request.put(`staff/${selected._id}`, values);
      if (res.status === 200) {
        message.success('Successfully Updated!');
        setSelected(undefined);
        handleCancel();
        getStaff();
      } else {
        message.error('Failed!');
      }
    } catch (e) {
      console.log('err', e);
    }
  };

  const columns = [
    {
      title: 'Staff Id',
      dataIndex: 'staffId',
      key: 'staffId'
    },
    {
      title: 'Full Name',
      dataIndex: 'fullname',
      key: 'fullname'
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Mobile',
      dataIndex: 'phone',
      key: 'phone'
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
      render: (_, record) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            onClick={() => {
              showModal();
              setSelected(record);
            }}
          />
          <Popconfirm
            placement="right"
            title={msg}
            okText="Yes"
            cancelText="No"
            onConfirm={() => deleteStaff(record._id)}>
            <Button icon={<DeleteOutlined />} />
          </Popconfirm>
          <Button icon={<PlusOutlined />} onClick={() => setIsModalVisible1(true)} />
        </Space>
      )
    }
  ];
  const msg = 'Are you sure you want to delete user?';

  useEffect(() => {
    getStaff();
  }, []);

  return (
    <MainLayout title={'Staff Management'}>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
      {selected !== undefined && (
        <Modal
          title="Staff Update Form"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
          width={800}>
          <Form
            layout="horizontal"
            labelCol={{ span: 6 }}
            onFinish={updateStaff}
            wrapperCol={{ span: 12 }}
            initialValues={selected}>
            <Form.Item
              label="Full Name"
              name="fullname"
              rules={[
                {
                  required: true,
                  message: 'Please input Full Name!'
                }
              ]}>
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!'
                },
                {
                  required: true,
                  message: 'Please input your E-mail!'
                }
              ]}>
              <Input />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: 'Please input your phone number!'
                }
              ]}>
              <Input
                style={{
                  width: '100%'
                }}
                maxLength={10}
              />
            </Form.Item>

            <Form.Item
              name="gender"
              label="Gender"
              rules={[
                {
                  required: true,
                  message: 'Please select gender!'
                }
              ]}>
              <Select placeholder="select your gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="address"
              label="Address"
              rules={[
                {
                  required: true,
                  message: 'Please input Intro'
                }
              ]}>
              <Input.TextArea showCount maxLength={100} />
            </Form.Item>

            <Form.Item
              name="role"
              label="Type of Work"
              rules={[
                {
                  required: true,
                  message: 'Please select working type!'
                }
              ]}>
              <Select placeholder="select your type">
                <Option value="Supervisor">Supervisor</Option>
                <Option value="Co-supervisor">Co-Supervisor</Option>
                <Option value="Panel member">Panel Member</Option>
              </Select>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16
              }}>
              <center>
                {' '}
                <Button type="primary" htmlType="submit" className="btnsubmit">
                  Submit
                </Button>
              </center>
            </Form.Item>
          </Form>
        </Modal>
      )}
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
