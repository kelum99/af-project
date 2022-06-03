import React, { useState, useEffect } from 'react';
import { Table, Space, Button, Typography, message } from 'antd';
import useRequest from '../../services/RequestContext';
import { StaffHeader } from '../../components/Headers';
import useUser from '../../services/UserContext';

const RequestAccept = () => {
  const { Column } = Table;
  const { request } = useRequest();
  const { user } = useUser();
  const [groups, setGroups] = useState([]);
  const [status, setStatus] = useState(false);

  const getgroups = async () => {
    try {
      const res = await request.get(`group/bySupervisor/${user?.name}`);
      if (res.status === 200) {
        console.log('groups', res.data);
        setGroups(res.data.filter((v) => v.status === 'Pending'));
      } else {
        message.error('failed!');
      }
    } catch (err) {
      console.log('err', err);
    }
  };

  const onAccept = async (id) => {
    try {
      const res = await request.put(`group/status/${id}`, { status: 'Accepted' });
      if (res.status === 200) {
        getgroups();
        message.success('Group Accepetd!');
      } else {
        message.error('failed!');
      }
    } catch (err) {
      console.log('err', err);
    }
  };

  const onReject = async (id) => {
    try {
      const res = await request.put(`group/status/${id}`, { status: 'Rejected' });
      if (res.status === 200) {
        getgroups();
        message.success('Group Rejected!');
      } else {
        message.error('failed!');
      }
    } catch (err) {
      console.log('err', err);
    }
  };

  useEffect(() => {
    if (user) {
      getgroups();
    }
  }, [user]);

  return (
    <StaffHeader>
      <center>
        <h1>Student Group Requests</h1>
      </center>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 15 }}>
        <Table dataSource={groups} style={{ width: '90%' }}>
          <Column title="Group ID" dataIndex="groupId" key="groupId" />
          <Column title="Group Leader" dataIndex="groupLeader" key="groupLeader" />
          <Column title="Member 1" dataIndex="member1" key="member1" />
          <Column title="Member 2" dataIndex="member2" key="member2" />
          <Column title="Member 3" dataIndex="member3" key="member3" />
          <Column title="Co-Supervisor" dataIndex="coSupervisor" key="coSupervisor" />
          <Column
            title="Action"
            key="action"
            render={(_, record) => (
              <Space size="middle">
                <Button type="primary" onClick={() => onAccept(record.groupId)}>
                  Accept
                </Button>
                <Button type="danger" onClick={() => onReject(record.groupId)}>
                  Reject
                </Button>
              </Space>
            )}
          />
        </Table>
      </div>
    </StaffHeader>
  );
};

export default RequestAccept;
