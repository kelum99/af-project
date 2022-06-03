import React, { useState, useEffect } from 'react';
import { Table, Space, Popconfirm, Form, Input, Modal, Button, message, Select } from 'antd';
import useRequest from '../../services/RequestContext';
import { jsPDF } from 'jspdf';
import { DownloadOutlined } from '@ant-design/icons';

const PresentationEvalution = () => {
  const { Option } = Select;
  const { request } = useRequest();
  const [form] = Form.useForm();

  const [selected, setSelected] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState([]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setSelected(undefined);
    setIsModalVisible(false);
  };

  const onReset = () => {
    form.resetFields();
  };

  //Report Generate
  const downloadPDF = () => {
    // doc = new jsPDF("p", "pt", [1000, 600]);
    doc = new jsPDF({
      orientation: 'landscape',
      unit: 'pt',
      format: [1700, 1000]
    });
    doc.html(document.getElementById('printTable'), {
      callback: function(pdf) {
        pdf.save('PresentationReport.pdf');
      }
    });
  };

  const getpresentationEvaluations = async () => {
    try {
      const res = await request.get('presentationEvaluation');
      if (res.status === 200) {
        console.log('data', res);
        setData(res.data);
      } else {
        message.error('Data getting failed!');
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const onFinish = async values => {
    try {
      const res = await request.post('presentationEvaluation', values);
      if (res.status === 201) {
        message.success('Successfully Added!');
        getpresentationEvaluations();
        onReset();
      } else {
        message.error('Failed Try Again!');
        onReset();
      }
    } catch {
      console.log('error!', e);
    }
  };

  const updatepresentationEvaluation = async values => {
    try {
      const res = await request.put(`presentationEvaluation/${selected._id}`, values);
      if (res.status === 200) {
        message.success('Successfully Upadted!');
        setSelected(undefined);
        getpresentationEvaluations();
      } else {
        message.error('Failed Try Again!');
      }
    } catch {
      console.log('error!', e);
    }
  };

  const handleDelete = async id => {
    try {
      const res = await request.delete(`presentationEvaluation/${id}`);
      if (res.status === 200) {
        message.success('Successfully Removed!');
        getpresentationEvaluations();
      } else {
        message.error('Failed!');
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
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() => {
              showModal();
              setSelected(record);
            }}
            style={{ marginBottom: 20 }}>
            Update
          </Button>

          <Popconfirm
            placement="right"
            title="Are you sure to delete this record!"
            okText="Yes"
            cancelText="No"
            onConfirm={() => handleDelete(record._id)}>
            <Button type="primary" style={{ marginBottom: 20 }}>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      )
    }
  ];

  useEffect(() => {
    getpresentationEvaluations();
  }, []);

  return (
    <div className="MainContainer-Item">
      <div className="form-item">
        <center>
          <h2 style={{ marginTop: 20 }}> Presentation Evaluation Form</h2>
        </center>
        <Form
          form={form}
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 20 }}
          style={{ width: '80%', marginTop: 25 }}>
          <Form.Item
            label="Marking Criteria"
            name="MarkingCriteria"
            rules={[
              {
                required: true,
                message: 'Please input  MarkingCriteria!'
              }
            ]}>
            <Input />
          </Form.Item>
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
            <Table dataSource={data}
             columns={columns} 
             id="printTable" 
             pagination={false}
             style={{ width: '80%', margin: 15 }} />
          </div>
          {selected !== undefined && (
            <Modal
              title="Upadte"
              width={800}
              footer={null}
              visible={isModalVisible}
              onCancel={handleCancel}>
              <div>
                <Form initialValues={selected} onFinish={updatepresentationEvaluation} >
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
          )}

          <Button
          style={{float: "right" }}
            type="primary"
            className="AddButton"
            icon={<DownloadOutlined />}
            onClick={downloadPDF}>
            Download Report
          </Button>
        </div>
      </div>
    </div>
  );
};
export default PresentationEvalution;
