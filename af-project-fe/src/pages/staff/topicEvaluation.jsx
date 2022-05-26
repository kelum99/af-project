import React, { useState } from 'react';
import { Table, Space, Button, Popconfirm, Checkbox, Modal, Form, Input } from 'antd';

const dataSource = [
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
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = values => {
    console.log('Success:', values);
  };

  const layout = {
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 14
    }
  };
  const columns = [
    {
      title: 'GroupID',
      dataIndex: 'groupID',
      key: 'groupID',
      render: text => <a>{text}</a>
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
      render: () => (
        <Space size="middle">
          <Button type="primary" onClick={showModal} style={{ marginBottom: 20 }}>
            Feedback
          </Button>
        </Space>
      )
    }
  ];

  return (
    <div className="MainContainer-Item">
      <div className="form-item">
      <h2 style={{ color: '#fff' }}>User Management</h2>
      <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Table dataSource={dataSource} columns={columns} style={{ width: '80%', margin: 15 }} />
      </div>
      
      <Modal
        title="Feedback"
        width={800}
        footer={null}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}>
        <div>
          <Form>
          <Form.Item
            label="Group ID"
            name="groupid"
            rules={[
              {
                required: true,
                message: 'Please input  Group ID!'
              }
            ]}>
            <Input />
          </Form.Item>

            <Form.Item
              label="Feedback"
              name="feedback"
              rules={[
                {
                  required: true,
                  message: 'Please input  Feedback!'
                }
              ]}>
              <Input />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16
              }}></Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
              
                <Button type="primary" htmlType="submit" style={{ marginRight: 70 }}>
                  Accept
                </Button>
                

                <Button type="primary" htmlType="submit"  >
                  Reject
                </Button>
                
                
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div> 
    </div>
    </div>
  );
};

export default TopicEvaluation;
