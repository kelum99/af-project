import React, { useState } from 'react';
import { Table, Space, Popconfirm, Form, Input, Modal, Button, message, Select } from 'antd';

const dataSource = [
  {
    key: '1',
    MarkingCriteria: 'plagarism',
    groupid: 'Mike',
    member1: 32,
    member2: '10 Downing Street',
    member3: '',
    member4: '10 Downing Street'
  },
  {
    key: '2',
    MarkingCriteria: 'plagarism',
    groupid: 'Mike',
    member1: 32,
    member2: '10 Downing Street',
    member3: '',
    member4: '10 Downing Street'
  },
  {
    key: '1',
    MarkingCriteria: 'plagarism',
    groupid: 'Mike',
    member1: 32,
    member2: '10 Downing Street',
    member3: '',
    member4: '10 Downing Street'
  },
  {
    key: '2',
    MarkingCriteria: 'plagarism',
    groupid: 'Mike',
    member1: 32,
    member2: '10 Downing Street',
    member3: '',
    member4: '10 Downing Street'
  }
];

const PresentationEvalution = () => {
  const { Option } = Select;

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
      title: 'Marking Criteria',
      dataIndex: 'MarkingCriteria',
      key: 'MarkingCriteria'
    },
    {
      title: 'Group ID',
      dataIndex: 'groupid',
      key: 'groupid'
    },
    {
      title: 'Member 1',
      dataIndex: 'member1',
      key: 'member1'
    },
    {
      title: 'Member 2',
      dataIndex: 'member2',
      key: 'member2'
    },
    {
      title: 'Member 3',
      dataIndex: 'member3',
      key: 'member3'
    },
    {
      title: 'Member 4',
      dataIndex: 'member4',
      key: 'member4'
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
          <Button type="primary" onClick={showModal} style={{ marginBottom: 20 }}>
            Update
          </Button>
        </Space>
      )
    }
  ];

  return (
    <div className="MainContainer-Item">
      <div className="form-item">
        <center>
          <h2 style={{ marginTop: 20 }}> Presentation Evaluation Form</h2>
        </center>
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 20 }}
          style={{ width: '80%', marginTop: 25 }}>
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
            label="Member 1"
            name="member1"
            rules={[
              {
                required: true,
                message: 'Please input marks!'
              }
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Member 2"
            name="member2"
            rules={[
              {
                required: true,
                message: 'Please input marks!'
              }
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Member 3"
            name="member3"
            rules={[
              {
                required: true,
                message: 'Please input marks!'
              }
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Member 4"
            name="member4"
            rules={[
              {
                required: true,
                message: 'Please input marks!'
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
            <center>
              {' '}
              <Button type="primary" htmlType="submit">
                ADD
              </Button>
            </center>
          </Form.Item>
        </Form>

        <div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Table dataSource={dataSource} columns={columns} style={{ width: '80%', margin: 15 }} />
          </div>
          <Modal>
            title="Upadte" width={800}
            footer={null}
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}>
            <div>
              <Form>
                <Form.Item
                  label="Member 1"
                  name="member1"
                  rules={[
                    {
                      required: true,
                      message: 'Update marks!'
                    }
                  ]}>
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Member 2"
                  name="member2"
                  rules={[
                    {
                      required: true,
                      message: 'Update marks!'
                    }
                  ]}>
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Member 3"
                  name="member3"
                  rules={[
                    {
                      required: true,
                      message: 'Update marks!'
                    }
                  ]}>
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Member 4"
                  name="member4"
                  rules={[
                    {
                      required: true,
                      message: 'Update marks!'
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
                  <center>
                    <Button type="primary" htmlType="submit">
                      Upadte
                    </Button>
                  </center>
                </Form.Item>
              </Form>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default PresentationEvalution;
