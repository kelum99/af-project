import React from 'react';
import { Form, Input, Button, Card, Typography, Space, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import useRequest from '../services/RequestContext';
import useUser from '../services/UserContext';
import './ComponentsStyles.css';

export const StudentLogin = () => {
  const { Text, Link } = Typography;
  const navigate = useNavigate();
  const { request, UpdateToken } = useRequest();
  const [form] = Form.useForm();
  const { decodeToken } = useUser();

  const onFinish = async (values) => {
    try {
      const res = await request.post('login/student', values);
      if (res.status === 200) {
        await UpdateToken(res.data.data.token);
        decodeToken(res.data.data.token);
        navigate('/markingschema');
      } else {
        message.error('Incorrect Student Id or Password!');
        onReset();
      }
    } catch (e) {
      console.log('login error ', e);
      message.error('Incorrect Student Id or Password!');
      onReset();
    }
  };
  const onReset = () => {
    form.resetFields();
  };
  return (
    <div className="login-main">
      <div className="login-main-component">
        <Card
          className="loginCard"
          title="Student Sign In"
          headStyle={{ fontSize: 30, fontWeight: 'bold', border: 'none' }}>
          <Form
            style={{ width: 400 }}
            layout="vertical"
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            form={form}
            autoComplete="off">
            <Form.Item
              className="lableText"
              label="Student Id"
              name="studentId"
              rules={[
                {
                  required: true,
                  message: 'Please input your Student Id!'
                }
              ]}>
              <Input
                style={{ width: 400, borderRadius: 4, height: 40 }}
                placeholder="Enter Student Id"
              />
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
              <Input.Password
                style={{ width: 400, borderRadius: 4, height: 40 }}
                placeholder="Enter Password"
              />
            </Form.Item>

            <Form.Item style={{ alignItems: 'center' }}>
              <Button type="primary" htmlType="submit" className="loginBtn">
                Login
              </Button>
            </Form.Item>

            <div style={{ textAlign: 'center' }}>
              <Space>
                <Text>Do not have an account?</Text> <Link strong>Sign Up</Link>
              </Space>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export const StaffLogin = () => {
  const { Text, Link } = Typography;
  const navigate = useNavigate();
  const { request, UpdateToken } = useRequest();
  const [form] = Form.useForm();
  const { decodeToken } = useUser();

  const onFinish = async (values) => {
    try {
      const res = await request.post('login/staff', values);
      if (res.status === 200) {
        await UpdateToken(res.data.data.token);
        decodeToken(res.data.data.token);
        navigate('/markingschema');
      } else {
        message.error('Incorrect Staff Id or Password!');
        onReset();
      }
    } catch (e) {
      console.log('login error ', e);
      message.error('Incorrect Staff Id or Password!');
      onReset();
    }
  };
  const onReset = () => {
    form.resetFields();
  };
  return (
    <div className="login-main-component">
      <Card
        className="loginCard"
        title="Staff Sign In"
        headStyle={{ fontSize: 30, fontWeight: 'bold', border: 'none' }}>
        <Form
          style={{ width: 400 }}
          layout="vertical"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          form={form}
          autoComplete="off">
          <Form.Item
            className="lableText"
            label="Staff Id"
            name="staffId"
            rules={[
              {
                required: true,
                message: 'Please input your Staff Id!'
              }
            ]}>
            <Input
              style={{ width: 400, borderRadius: 4, height: 40 }}
              placeholder="Enter Staff Id"
            />
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
            <Input.Password
              style={{ width: 400, borderRadius: 4, height: 40 }}
              placeholder="Enter Password"
            />
          </Form.Item>

          <Form.Item style={{ alignItems: 'center' }}>
            <Button type="primary" htmlType="submit" className="loginBtn">
              Login
            </Button>
          </Form.Item>

          <div style={{ textAlign: 'center' }}>
            <Space>
              <Text>Do not have an account?</Text> <Link strong>Sign Up</Link>
            </Space>
          </div>
        </Form>
      </Card>
    </div>
  );
};
