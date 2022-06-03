import React from "react";
import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;
const data = [
  {
    key: '1',
    groupid: 'John',
    groupLeader: 'IT292870098',
    member1: 'IT39290098',
    member2: 'IT20204567',
    member3: 'IT20204334',
    coSupervisor: 'Basil',
  },
]

const RequestAccept = () => {
    
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

     

    //   useEffect(() => {
    //     getUsergroup();
    //     getgroups();
    
    //   }, []);

    return(
        <Table dataSource={data}>
        <Column title="Group ID" dataIndex="groupid" key="groupid" />
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
              <a>Accept {record.lastName}</a>
              <a>Reject</a>
            </Space>
          )}
        />
      </Table>
    )
}
     


    


export default RequestAccept;