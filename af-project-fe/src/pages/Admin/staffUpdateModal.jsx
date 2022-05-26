import { Modal, Form, Input, Button, Checkbox, Select } from 'antd';
import React from 'react';

const StaffUpdateModal = (props) => {
  return (
    <Modal
      title="Staff Update Form"
      visible={props.visible}
      onCancel={props.onCancel}
      footer={null}
      width={800}>
      <Form
        layout="horizontal"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 12 }}
        initialValues={props.values}>
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
          name="type"
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
  );
};

export default StaffUpdateModal;
