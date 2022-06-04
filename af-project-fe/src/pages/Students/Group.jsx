import React, { useEffect, useState } from 'react';
import { Form, Input, Button, message, Select, Descriptions } from 'antd';
import './Students.css';
import { StudentHeader } from '../../components/Headers';
import useRequest from '../../services/RequestContext';
import useUser from '../../services/UserContext';

function Group() {
  const { request } = useRequest();
  const { user } = useUser();
  const [form] = Form.useForm();

  const [groups, setGroups] = useState([]);
  const [userGroup, setUserGroup] = useState();
  const [students, setStudents] = useState([]);
  const [staff, setStaff] = useState([]);

  const onReset = () => {
    console.log('onReset');
    form.resetFields();
  };

  const onFinish = async (values) => {
    try {
      values.groupId = `GRP_${Math.floor(Math.random() * 2000) + 1}`;
      values.status = 'Pending';
      values.panelMember = 'Not Set';
      const res = await request.post('group', values);
      if (res.status === 201) {
        message.success('Group created request send!');
        console.log('data', res.data);
        await request.put(`student/group/${res.data.data.groupLeader}`, {
          groupId: res.data.data.groupId
        });
        await request.put(`student/group/${res.data.data.member1}`, {
          groupId: res.data.data.groupId
        });
        await request.put(`student/group/${res.data.data.member2}`, {
          groupId: res.data.data.groupId
        });
        await request.put(`student/group/${res.data.data.member3}`, {
          groupId: res.data.data.groupId
        });
        onReset();
        getgroups();
      } else {
        message.error('falied');
        onReset();
      }
    } catch (err) {
      console.log('err', err);
    }
  };

  const getgroups = async () => {
    try {
      const res = await request.get('group');
      if (res.status === 200) {
        console.log('groups', res.data);
        setGroups(res.data);
      } else {
        message.error('failed!');
      }
    } catch (err) {
      console.log('err', err);
    }
  };

  const getStudents = async () => {
    try {
      const res = await request.get('student');
      if (res.status === 200) {
        console.log('students', res.data);
        setStudents(res.data);
      } else {
        message.error('failed!');
      }
    } catch (err) {
      console.log('err', err);
    }
  };

  const getStaff = async () => {
    try {
      const res = await request.get('staff');
      if (res.status === 200) {
        console.log('staff', res.data);
        setStaff(res.data);
      } else {
        message.error('failed!');
      }
    } catch (err) {
      console.log('err', err);
    }
  };

  const getUsergroup = async () => {
    try {
      const res = await request.get(`group/${user.group}`);
      if (res.status === 200) {
        console.log('userGRR', res.data);
        setUserGroup(res.data);
      } else {
        message.error('failed!');
      }
    } catch (err) {
      console.log('err', err);
    }
  };

  useEffect(() => {
    getUsergroup();
    getgroups();
    getStaff();
    getStudents();
  }, []);

  return (
    <StudentHeader>
      {userGroup === undefined && (
        <div className="form2">
          <Form
            
            form={form}
            layout="horizontal"
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 6 }}
            onFinish={onFinish}>
            <Form.Item wrapperCol={{ offset: 10, span: 10 }} style={{ margin: 20 }}>
              <h1>Group Registertion</h1>
            </Form.Item>
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
                {students.map((student) => (
                  <Select.Option value={student.studentId}>{student.studentId}</Select.Option>
                ))}
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
                {students.map((student) => (
                  <Select.Option value={student.studentId}>{student.studentId}</Select.Option>
                ))}
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
                {students.map((student) => (
                  <Select.Option value={student.studentId}>{student.studentId}</Select.Option>
                ))}
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
                {staff &&
                  staff
                    .filter((val) => val.role === 'Supervisor')
                    .map((val) => (
                      <Select.Option value={val.fullname}>{val.fullname}</Select.Option>
                    ))}
              </Select>
            </Form.Item>

            <Form.Item
              label="Co-Supervisor"
              name="coSupervisor"
              rules={[
                {
                  required: true,
                  message: 'Please enter co-supervisor name'
                }
              ]}>
              <Select>
                {staff &&
                  staff
                    .filter((val) => val.role === 'Co-supervisor')
                    .map((val) => (
                      <Select.Option value={val.fullname}>{val.fullname}</Select.Option>
                    ))}
              </Select>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 10, span: 8 }}>
              <Button type="primary" htmlType="submit" className="btn3">
                Create
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
      {userGroup &&
        userGroup.map((value) => (
          <div className="groupDetails">
            <Descriptions
              title={<h2>Group Information</h2>}
              labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
              contentStyle={{ fontSize: 16 }}>
              <Descriptions.Item label="Group ID">{value.groupId}</Descriptions.Item>
              <Descriptions.Item label="Group Leader">{value.groupLeader}</Descriptions.Item>
              <Descriptions.Item label="Member 1">{value.member1}</Descriptions.Item>
              <Descriptions.Item label="Member 2">{value.member2}</Descriptions.Item>
              <Descriptions.Item label="Member 3">{value.member3}</Descriptions.Item>
              <Descriptions.Item label="Supervisor">{value.supervisor}</Descriptions.Item>
              <Descriptions.Item label="Co-Supervisor">{value.coSupervisor}</Descriptions.Item>
              <Descriptions.Item label="Panel Members">{value.panelMember}</Descriptions.Item>
              <Descriptions.Item label="Status">{value.status}</Descriptions.Item>
            </Descriptions>
          </div>
        ))}
    </StudentHeader>
  );
}
export default Group;
