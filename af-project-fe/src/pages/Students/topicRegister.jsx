import React from 'react';
import { Form, Input, Button } from 'antd';
import './Students.css';


   
function TopicRegister() {
    
    const onReset = () => {
        form.resetFields();
      };
    

    const onFinish = async (values) => {
        try {
          const res = await request.post("topic", values);
          if (res.status === 201) {
            message.success("Topic successfully added!");
            console.log("move", res);
            onReset();
            getTopics();
          } else {
            message.error("failed!");
          }
        } catch (err) {
          console.log("err", err);
        }
      };

return(
    
    <div className="form-container1">
    <Form layout="horizontal" labelCol={{ span: 10 }} wrapperCol={{ span: 8 }}
     onFinish={onFinish}>
      <h1 className='h1'>
        <center>Topic Registertion</center>
      </h1><br/>

      

      <Form.Item
          label="Group ID"
          name="groupid"
          rules={[
            {
              required: true,
              message: 'Please input your username!'
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
              message: 'Please input your username!'
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
              message: 'Please input your username!'
            }
          ]}>
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" className='btn2'>
              Submit
            </Button>
          </Form.Item>
      
  </Form>
  </div>
  
);



}
export default TopicRegister;
