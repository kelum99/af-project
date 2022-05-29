import React, { useState, useEffect } from 'react';
import MainLayout from '../../components/MainLayout';
import { Table, Space, Button, Popconfirm, Form, Input, message } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import './AdminStyles.css';
import Modal from 'antd/lib/modal/Modal';
import useRequest from '../../services/RequestContext';

const MarkingSchema = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  const { request } = useRequest();
  const [form] = Form.useForm();

  const getMarkingSchemas = async () => {
    try {
      setLoading(true);
      const res = await request.get('markingschema');
      if (res.status === 200) {
        setData(res.data);
        console.log('sada', res.data);
      } else {
        console.log('error getting data', res.data);
      }
    } catch (e) {
      console.log('error!', e);
    } finally {
      setLoading(false);
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setSelected(undefined);
    setIsEdit(false);
    setIsModalVisible(false);
  };

  const onFinish = async (values) => {
    if (!isEdit) {
      try {
        const res = await request.post('markingschema', values);
        if (res.status === 201) {
          message.success('Successfully Added!');
          handleCancel();
          getMarkingSchemas();
          onReset();
        } else {
          message.error('Failed Try Again!');
          onReset();
        }
      } catch {
        console.log('error!', e);
      }
    }
    if (isEdit) {
      try {
        const res = await request.put(`markingschema/${selected._id}`, values);
        if (res.status === 200) {
          message.success('Successfully Upadted!');
          setSelected(undefined);
          handleCancel();
          getMarkingSchemas();
          onReset();
        } else {
          message.error('Failed Try Again!');
          onReset();
        }
      } catch {
        console.log('error!', e);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const res = await request.delete(`markingschema/${id}`);
      if (res.status === 200) {
        message.success('Successfully Deleted!');
        getMarkingSchemas();
      } else {
        message.error('Failed Try Again!');
      }
    } catch (e) {
      console.log('error!', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMarkingSchemas();
  }, []);

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Created By',
      dataIndex: 'createdBy',
      key: 'createdBy'
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button
          
            onClick={() => {
              setIsEdit(true);
              setSelected(record);
              showModal();
            }}
          />
          <Popconfirm
            placement="right"
            title={msg}
            okText="Yes"
            cancelText="No"
            onConfirm={() => handleDelete(record._id)}>
            <Button icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      )
    }
  ];
  const msg = 'Are you sure you want to delete user?';
  return (
    <MainLayout title={'Marking Schema'}>
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        width={800}
        title={isEdit ? 'Edit Marking Schema' : 'Add Marking Schema'}
        footer={null}>
        <Form
          initialValues={isEdit ? selected : undefined}
          form={form}
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 20 }}
          autoComplete="off"
          onFinish={onFinish}
          style={{ width: '80%' }}>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please input title!' }]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please input your Description!' }]}>
            <Input.TextArea />
          </Form.Item>

          {!isEdit && (
            <Form.Item label="Created By" name="createdBy">
              <Input />
            </Form.Item>
          )}

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              {isEdit ? 'Update' : 'Create'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <div>
        <Button type="primary" onClick={showModal} style={{ marginBottom: 20 }}>
          Add Marking Schema
        </Button>
        <Table
          columns={columns}
          dataSource={data}
          loading={loading}
          rowKey={data.map((v) => v._id)}
        />
      </div>
    </MainLayout>
  );
};

export default MarkingSchema;
