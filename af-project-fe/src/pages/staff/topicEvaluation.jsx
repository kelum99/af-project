import React, { useState, useEffect } from 'react';
import { Table, Space, Button, Popconfirm, Checkbox, Modal, Form, Input, message } from 'antd';
import useRequest from '../../services/RequestContext';
import { StaffHeader } from '../../components/Headers';

const TopicEvaluation = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState();
  const [form] = Form.useForm();
  const { request } = useRequest();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setSelected(undefined);
    setIsModalVisible(false);
  };

  const gettopicEvaluation = async () => {
    try {
      const res = await request.get('topic');
      if (res.status === 200) {
        setData(res.data.filter((val) => val.status === 'Pending'));
      } else {
        message.error('Data fetch failed!');
      }
    } catch (e) {
      console.log('err', e);
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  const updatetopicEvaluation = async (values) => {
    try {
      const res = await request.put(`topic/feedback/${selected.groupid}`, values);
      if (res.status === 200) {
        message.success('Successfully Updated!');
        setSelected(undefined);
        onReset();
        handleCancel();
        gettopicEvaluation();
      } else {
        message.error('Failed!');
        onReset();
      }
    } catch (e) {
      console.log('err', e);
    }
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
      dataIndex: 'groupid',
      key: 'groupid',
      render: (text) => <a>{text}</a>
    },
    {
      title: 'ResearchTopic',
      dataIndex: 'researchtopic',
      key: 'researchtopic'
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
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() => {
              setSelected(record);
              showModal();
            }}
            style={{ marginBottom: 20 }}>
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
        <center>
          <h1>Topic Feedback</h1>
        </center>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Table
            dataSource={data}
            columns={columns}
            style={{ width: '80%', margin: 15 }}
            bordered
          />
        </div>
        {selected !== undefined && (
          <Modal
            title="Feedback"
            width={800}
            footer={null}
            visible={isModalVisible}
            onCancel={handleCancel}>
            <div>
              <Form
                autoComplete="off"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 20 }}
                form={form}
                onFinish={updatetopicEvaluation}>
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
                      message: 'Please input  Status!'
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
        )}
      </div>
    </StaffHeader>
  );
};

export default TopicEvaluation;
