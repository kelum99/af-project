import React from 'react';
import MainLayout from '../../components/MainLayout';
import { Table, Space, Button, Popconfirm, Checkbox  } from 'antd';


function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },

    {
      key: '4',
      name: 'mn Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

const TopicEvaluation = () => {

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age'
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address'
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <Checkbox onChange={onChange}>Yes</Checkbox>;
              <Checkbox onChange={onChange}>No</Checkbox>;
              
            </Space>
          )
        }
      ];


    return(

        <MainLayout>
        <h2 style={{ color: '#fff' }}>User Management</h2>
        <div>
          <Table columns={columns} dataSource={data} />
        </div>
      </MainLayout>
    );

  
};

export default TopicEvaluation;