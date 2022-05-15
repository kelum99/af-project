import React from 'react';
import { Table, Space, Button } from 'antd';

const { Column, ColumnGroup } = Table;

const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    groupid: 'gr444',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    groupid: 'gr2222',
    rnumber: ['IT20204334', 'IT2929887'],
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  }
];

const Accepettopics = () => {
  return (
    <div>
      <Table dataSource={data}>
        <Column title="Group ID" dataIndex="groupid" key="groupid" />
        <Column title="Research Topic" dataIndex="topic" key="topic" />
        <Column title="Register Numbers" dataIndex="rnumber" key="rnumber" />
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
