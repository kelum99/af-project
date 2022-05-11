import React from 'react';
import { Form, Input, Button, Card, Typography, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { Text, Link } = Typography;
  const navigate = useNavigate();
  return (
    <div className="login-main-component">
      <Card
        className="loginCard"
        title="Sign In"
        headStyle={{ fontSize: 30, fontWeight: 'bold', border: 'none' }}>
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
            <Input
              style={{ width: 400, borderRadius: 4, height: 40 }}
              placeholder="Enter Username"
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
            <Button
              type="primary"
              htmlType="submit"
              className="loginBtn"
              onClick={() => {
                navigate('/usermanagement');
              }}>
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
}

export default Login;
