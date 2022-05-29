import React from 'react';
import { Table, Space, Button } from 'antd';

const { Column, ColumnGroup } = Table;

const data = [

  {
    key: '2',
    groupid: 'gr444',
    researchtopic: 'Hello', 
    registernumbers: ['IT20204334', 'IT2929887'],
    
  },
  {
    key: '3',
    groupid: 'gr2222',
    researchtopic: 'Hello', 
    registernumbers: ['IT20204334', 'IT2929887'],
  }
];

const Accepettopics = () => {
  return (
    <div>
      <Table dataSource={data}>
        <Column title="Group ID" dataIndex="groupid" key="groupid" />
        <Column title="Research Topic" dataIndex="researchtopic" key="researchtopic" />
        <Column title="Register Numbers" dataIndex="registernumbers" key="registernumbers" />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <Button>Accept</Button>
              <Button>Delete</Button>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default Accepettopics;
