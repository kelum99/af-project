import React, { useState, useEffect } from 'react';
import MainLayout from '../../components/MainLayout';
import { Table, Space, Button, Popconfirm, Modal, message, Form, Select, Input } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import useRequest from '../../services/RequestContext';

const StudentManagement = () => {
  const { request } = useRequest();
  const { Option } = Select;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setSelected(undefined);
    setIsModalVisible(false);
  };

  const getStudents = async () => {
    try {
      const res = await request.get('student');
      if (res.status === 200) {
        console.log('data', res.data);
        setData(res.data);
      } else {
        message.error('Error while getting data!');
      }
    } catch (e) {
      console.log('error', e);
    }
  };

  const deleteStudent = async (id) => {
    try {
      const res = await request.delete(`student/${id}`);
      if (res.status === 200) {
        message.success('Successfully Removed!');
        getStudents();
      } else {
        message.error('Failed Try Again!');
      }
    } catch (e) {
      console.log('error', e);
    }
  };

  const handleUpdate = async (values) => {
    try {
      const res = await request.put(`student/${selected._id}`, values);
      if (res.status === 200) {
        message.success('Successfully Updated!');
        getStudents();
        setSelected(undefined);
        handleCancel();
      } else {
        message.error('Failed Try Again!');
      }
    } catch (e) {
      console.log('error', e);
    }
  };
  useEffect(() => {
    getStudents();
  }, []);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Register Number',
      dataIndex: 'studentId',
      key: 'studentId'
    },
    {
      title: 'Mobile',
      dataIndex: 'mobile',
      key: 'mobile'
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Faculty',
      dataIndex: 'faculty',
      key: 'faculty'
    },
    {
      title: 'Specialization',
      dataIndex: 'specialization',
      key: 'specialization'
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
              setSelected(record);
            }}
          />
          <Popconfirm
            placement="right"
            title={msg}
            okText="Yes"
            cancelText="No"
            onConfirm={() => deleteStudent(record._id)}>
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
        <Table columns={columns} dataSource={data} responsive />
      </div>
      {selected !== undefined && (
        <Modal
          title="Student Update Form"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
          width={800}>
          <Form
            style={{ width: 400 }}
            layout="vertical"
            name="update"
            labelCol={{ span: 12 }}
            wrapperCol={{ span: 16 }}
            initialValues={selected}
            onFinish={handleUpdate}
            autoComplete="off">
            <Form.Item
              className="lableText"
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input your name!'
                },
                { whitespace: true },
                { min: 3 }
              ]}
              hasFeedback>
              <Input style={{ width: 400, borderRadius: 4, height: 40 }} placeholder="Name" />
            </Form.Item>

            <Form.Item
              className="lableText"
              label="Mobile Number"
              name="mobile"
              rules={[
                {
                  required: false,
                  message: 'Please input your mobile number!'
                },
                { min: 10 }
              ]}
              hasFeedback>
              <Input
                style={{ width: 400, borderRadius: 4, height: 40 }}
                placeholder="Mobile Number"
              />
            </Form.Item>

            <Form.Item
              className="lableText"
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your frequently used email!'
                },
                { type: 'email' }
              ]}
              hasFeedback>
              <Input style={{ width: 400, borderRadius: 4, height: 40 }} placeholder="Email" />
            </Form.Item>

            <Form.Item className="lableText" label="Faculty" name="faculty">
              <Select
                style={{
                  width: 400,
                  borderRadius: 4,
                  height: 40
                }}>
                <Option value="Faculty of Computing">Faculty of Computing</Option>
                <Option value="Faculty of Business">Faculty of Business</Option>
                <Option value="Faculty of Engineering">Faculty of Engineering</Option>
                <Option value="Faculty of Humanities">Faculty of Humanities</Option>
              </Select>
            </Form.Item>

            <Form.Item
              className="lableText"
              label="Specialization"
              name="specialization"
              rules={[
                {
                  required: true,
                  message: 'Please input your field of specialization!'
                },
                { whitespace: true },
                { min: 2 }
              ]}
              hasFeedback>
              <Input
                style={{ width: 400, borderRadius: 4, height: 40 }}
                placeholder="Eg: Software Engineering"
              />
            </Form.Item>

            <Form.Item style={{ alignItems: 'center' }}>
              <Button type="primary" htmlType="submit" className="loginBtn">
                Update
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      )}
    </MainLayout>
  );
};

export default StudentManagement;
