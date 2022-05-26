import React from 'react';
import MainLayout from '../../components/MainLayout';
import { Table, Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const props = {
  name: 'file',
  multiple: false,
  action: '',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
  maxCount: 1,
  listType: 'picture',
  accept: '.doc,.pdf,.docx,.ppt,.pptx'
};

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street'
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street'
  }
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
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
  }
];

const Resources = () => {
  const { Dragger } = Upload;
  return (
    <MainLayout title={'Resources'}>
      <div>
        <h3>Upload Document / Templates</h3>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
        </Dragger>
      </div>
      <Table dataSource={dataSource} columns={columns} style={{ marginTop: 20 }} />
    </MainLayout>
  );
};

export default Resources;
