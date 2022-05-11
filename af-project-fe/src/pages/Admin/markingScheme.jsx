import React from 'react';
import MainLayout from '../../components/MainLayout';
import { Form, Input, Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const MarkingScheme = () => {
  return (
    <MainLayout>
      <h2>Marking Schemes</h2>
      <div>
        <Form
          style={{ width: 400 }}
          layout="vertical"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          //onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off">
          <Form.Item
            className="lableText"
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!'
              }
            ]}>
            <Input style={{ borderRadius: 4 }} placeholder="Enter Username" />
          </Form.Item>

          <Form.Item
            className="lableText"
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!'
              }
            ]}>
            <Input.Password style={{ borderRadius: 4 }} placeholder="Enter Password" />
          </Form.Item>

          <Form.Item style={{ alignItems: 'center' }}>
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Form.Item>
        </Form>
      </div>
    </MainLayout>
  );
};

export default MarkingScheme;
