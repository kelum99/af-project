import React from 'react';
import { Form, Input, Button, message, Select } from 'antd';
import './Students.css';
import useRequest from '../../services/RequestContext';
import {StudentHeader} from '../../components/Headers';

function Topicregister() {
  const { request } = useRequest();
  const [form] = Form.useForm();

  const onReset = () => {
    console.log('onReset');
    form.resetFields();
  };

  const onFinish = async (values) => {
    console.log('values', values);
    onReset();
    try {
      const res = await request.post('topic', values);
      if (res.status === 201) {
        message.success('Successfully registered your topic!');
        onReset();
      } else {
        message.success('Registration Failed. Try Again!');
        onReset();
      }
    } catch (e) {
      console.log('error', e);
      onReset();
    }
  };

  return (
    <StudentHeader>
      <div className="form-container1">
        <Form
          form={form}
          layout="horizontal"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 8 }}
          onFinish={onFinish}>
          <h1 className="h1">
            <center>Topic Registertion</center>
          </h1>
          <br />

          <Form.Item
            label="Facalty"
            name="facalty"
            rules={[
              {
                required: true,
                message: 'Please input your facalty'
              }
            ]}>
            <Select>
              <Select.Option value="computing">Computing</Select.Option>
              <Select.Option value="engineering">Engineering</Select.Option>
              <Select.Option value="bm">Business Management</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Group ID"
            name="groupid"
            rules={[
              {
                required: true,
                message: 'Please input your group id!'
              }
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Research Topic"
            name="researchtopic"
            rules={[
              {
                required: true,
                message: 'Please input your research topic!'
              }
            ]}>
            <Input.TextArea showCount maxLength={100} />
          </Form.Item>

          <Form.Item
            label="Register Numbers"
            name="registernumbers"
            rules={[
              {
                required: true,
                message: 'Please input your register numbers!'
              }
            ]}>
            <Input.TextArea showCount maxLength={50} />
          </Form.Item>

          <br />
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" className="btn2">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </StudentHeader>
  );
}
export default Topicregister;
