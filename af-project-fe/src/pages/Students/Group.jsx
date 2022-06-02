import React, { useEffect, useState } from 'react';
import { Form, Input, Button, message, Select } from 'antd';
import './Students.css';
import Headers from '../../components/Headers';
import { getGroup } from '../../../../af-project-be/src/controllers/Group.controller';
import { getgroups } from 'process';
import useRequest from '../../services/RequestContext';



function Group() {
const {request} = useRequest();
const [form] = Form.useForm();

const [isShow, setisShow] = useState(false);
//const [groups, setGroups] = useState([]);
const [savedData, setsavedData] = useState(null);

const onReset = () => {
  console.log('onReset');
  form.resetFields();
};

  const onFinish = async (values) => {
    try{
      const res = await request.post("group", values);
      if(res.status ===201) {
        message.success("Group created request send!");
        console.log("group", res);
        onReset();
        getgroups();
        setsavedData(res.data.data);
        setisShow(true);
        //setsavedData(null);
      }else{
        message.error("falied");
      }
    }catch (err){
      console.log("err", err);
    }
  };

 const getgroups = async () => {
   try{
     const res = await request.get("group");
     if(res.status === 200) {
       console.log("groups", res);
     }else{
       message.error("failed!");
     }
   } catch (err){
     console.log("err", err);
   }
 };

 useEffect(() => {
   getgroups();
 }, []);

  return (
    <React.Fragment>
    <Headers>
      <div className="form-container2">
        <Form 
        form = {form}
        layout="horizontal" 
        labelCol={{ span: 10 }} 
        wrapperCol={{ span: 8 }}
        onFinish={onFinish}>
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
              <Select.Option value="IT20204409">IT20204409</Select.Option>
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
              <Select.Option value="IT20204407">IT20204407</Select.Option>
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
              <Select.Option value="IT20204404">IT20204404</Select.Option>
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
              <Select.Option value="saman">saman</Select.Option>
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
              <Select.Option value="kumara">kumara</Select.Option>
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

{/* new */}

{
  isShow&&
    <div>
<label>Group Leader</label>
<label>{savedData?.groupLeader}</label>

<label>Member 1</label>
<label>{savedData?.member1}</label>

<label>Member 2</label>
<label>{savedData?.member2}</label>

<label>Member 3</label>
<label>{savedData?.member3}</label>

<label>Supervisor</label>
<label>{savedData?.supervisor}</label>

<label>Co-Supervisor</label>
<label>{savedData?.cosupervisor}</label>

    </div>
    
}
    </React.Fragment>
  );
}
export default Group;
