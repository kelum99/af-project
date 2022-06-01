import React from 'react';
import { Form, Input, Button, message, Select } from 'antd';
import './Students.css';
import Headers from '../../components/Headers';

function Group() {
  return (
    <Headers>
      <div className="form-container2">
        <Form layout="horizontal" labelCol={{ span: 10 }} wrapperCol={{ span: 8 }}>
          <h1>
            <center>Group Registertion</center>
          </h1>
          <br />

          <Form.Item
            label="Group Leader"
            name="groupLeader"
            rules={[
              {
                required: true,
                message: 'Please enter leader IT number'
              }
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Member 1"
            name="member1"
            rules={[
              {
                required: true,
                message: 'Please input your IT number'
              }
            ]}>
            <Select>
              <Select.Option value=""></Select.Option>
              <Select.Option value=""></Select.Option>
              <Select.Option value=""></Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Member 2"
            name="member2"
            rules={[
              {
                required: true,
                message: 'Please input your IT number'
              }
            ]}>
            <Select>
              <Select.Option value=""></Select.Option>
              <Select.Option value=""></Select.Option>
              <Select.Option value=""></Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Member 3"
            name="member3"
            rules={[
              {
                required: true,
                message: 'Please input your IT number'
              }
            ]}>
            <Select>
              <Select.Option value=""></Select.Option>
              <Select.Option value=""></Select.Option>
              <Select.Option value=""></Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Supervisor"
            name="supervisor"
            rules={[
              {
                required: true,
                message: 'Please enter supervisor name'
              }
            ]}>
            <Select>
              <Select.Option value=""></Select.Option>
              <Select.Option value=""></Select.Option>
              <Select.Option value=""></Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Co-Supervisor"
            name="cosupervisor"
            rules={[
              {
                required: true,
                message: 'Please enter co-supervisor name'
              }
            ]}>
            <Select>
              <Select.Option value=""></Select.Option>
              <Select.Option value=""></Select.Option>
              <Select.Option value=""></Select.Option>
            </Select>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" className="btn3">
              Create
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Headers>
  );
}
export default Group;
