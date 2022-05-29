import React from 'react';
import { Form, Input, Button, Checkbox, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import './RegStyles.css';

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={{
        width: 70
      }}>
      <Option value="IT">IT</Option>
      <Option value="BS">BS</Option>
      <Option value="EN">EN</Option>
    </Select>
  </Form.Item>
);

function StaffReg() {
  return (
    <div className="formP">
      <Form layout="horizontal" labelCol={{ span: 10 }} wrapperCol={{ span: 8 }}>
        <h1>
          <center>Staff Registertion</center>{' '}
        </h1>

        <Form.Item
          label="Full Name"
          name="fullname"
          rules={[
            {
              required: true,
              message: 'Please input your username!'
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
          name="staffid"
          label="Staff ID"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!'
            }
          ]}>
          <Input
            addonBefore={prefixSelector}
            style={{
              width: '100%'
            }}
          />
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
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!'
            }
          ]}
          hasFeedback>
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!'
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error('The two passwords that you entered do not match!')
                );
              }
            })
          ]}>
          <Input.Password />
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
            <Option value="other">Other</Option>
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
          name="typework"
          label="Type of Work"
          rules={[
            {
              required: true,
              message: 'Please select working type!'
            }
          ]}>
          <Select placeholder="select your type">
            <Option value="supervisor">Supervisor</Option>
            <Option value="panel member">Panel Member</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16
          }}>
          <Checkbox className="checkR">Remember me</Checkbox>
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
    </div>
  );
}

export default StaffReg;
