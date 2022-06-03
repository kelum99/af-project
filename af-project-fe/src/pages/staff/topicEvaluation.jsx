import React, { useState, useEffect } from 'react';
import { Table, Space, Button, Popconfirm, Checkbox, Modal, Form, Input, message } from 'antd';
import useRequest from '../../services/RequestContext';
import { StaffHeader } from '../../components/Headers';

const TopicEvaluation = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [form] = Form.useForm();
  const { request } = useRequest();
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

  const gettopicEvaluation = async () => {
    try {
      const res = await request.get('topicEvaluation');
      if (res.status === 200) {
        setData(res.data);
      } else {
        message.error('Data fetch failed!');
      }
    } catch (e) {
      console.log('err', e);
    }
  };

  const updatetopicEvaluation = async values => {
    try {
      const res = await request.put(`staff/${selected._id}`, values);
      if (res.status === 200) {
        message.success('Successfully Updated!');
        setSelected(undefined);
        handleCancel();
        getStaff();
      } else {
        message.error('Failed!');
      }
    } catch (e) {
      console.log('err', e);
    }
  };

  const onReset = () => {
    form.resetFields();
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
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Feedback',
      dataIndex: 'feedback',
      key: 'feedback'
    },

    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status'
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={showModal} style={{ marginBottom: 20 }}>
            Feedback
          </Button>
        </Space>
      )
    }
  ];

  useEffect(() => {
    gettopicEvaluation();
  }, []);

  return (
    <StaffHeader>
      <div className="MainContainer-Item">
        <h2 style={{ color: '#fff' }}>User Management</h2>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Table dataSource={data} columns={columns} style={{ width: '80%', margin: 15 }} />
        </div>

        <Modal
          title="Feedback"
          width={800}
          footer={null}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}>
          <div>
            <Form autoComplete="off" labelCol={{ span: 6 }} wrapperCol={{ span: 20 }} form={form}>
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
                label="Status"
                name="status"
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
                <center>
                  <Button type="primary" htmlType="submit" style={{ marginRight: 70 }}>
                    Submit
                  </Button>
                </center>
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </div>
    </StaffHeader>
  );
};

export default TopicEvaluation;
