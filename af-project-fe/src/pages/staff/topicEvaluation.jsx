import React from 'react';
import MainLayout from '../../components/MainLayout';
import { Table, Space, Button, Popconfirm, Checkbox  } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';


function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

const data = [
    {
      key: '1',
      groupID: 'G001',
      ResearchTopic: 32,
      researchDocs: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      groupID: 'G002',
      researchTopic: 32,
      researchDocs: 'New York No. 1 Lake Park'
    },
    {
      key: '3',
      groupID: 'G003',
      researchTopic: 32,
      researchDocs: 'New York No. 1 Lake Park'
    },

    {
      key: '4',
      groupID: 'G004',
      researchTopic: 32,
      researchDocs: 'New York No. 1 Lake Park'
    }
  ];

const TopicEvaluation = () => {

    const columns = [
        {
          title: 'GroupID',
          dataIndex: 'groupID',
          key: 'groupID',
          render: (text) => <a>{text}</a>
        },
        {
          title: 'ResearchTopic',
          dataIndex: 'researchTopic',
          key: 'researchTopic'
        },
        {
          title: 'ResearchDocs',
          dataIndex: 'researchDocs',
          key: 'researchDocs'
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
            <Button icon={<EditOutlined />} />
            <Popconfirm placement="right" title={msg} okText="Yes" cancelText="No">
              <Button icon={<DeleteOutlined />} />
            </Popconfirm>
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