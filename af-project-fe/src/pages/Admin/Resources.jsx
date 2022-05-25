import React, { useState } from 'react';
import MainLayout from '../../components/MainLayout';
import { Table, Upload, message, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { storage } from '../../services/Firebase';
import { ref, getDownloadURL, uploadBytesResumable, uploadBytes } from 'firebase/storage';

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
    title: 'File Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type'
  },
  {
    title: 'Download Link',
    dataIndex: 'url',
    key: 'url'
  }
];

const Resources = () => {
  const { Dragger } = Upload;
  const [file, setFile] = useState();
  const [uploading, setUploading] = useState(false);
  const [fileUrl, setFileUrl] = useState(null);

  const handleUpload = async () => {
    if (file) {
      setUploading(true);
      const storageRef = ref(storage, `test/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      console.log('**** _____ ', uploadTask);
      uploadTask.on('state_changed', null, null, () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            setFileUrl(downloadURL);
            message.success('Successfully Uploaded!');
          })
          .catch((e) => console.log('err', e))
          .finally(setUploading(false));
      });
    }
  };

  return (
    <MainLayout title={'Resources'}>
      <div>
        <h3>Upload Document / Templates</h3>
        <Dragger
          multiple={false}
          maxCount={1}
          accept=".doc,.pdf,.docx,.ppt,.pptx"
          beforeUpload={(file) => {
            setFile(file);
            return false;
          }}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
        </Dragger>
        <Button
          type="primary"
          disabled={!file}
          onClick={handleUpload}
          loading={uploading}
          style={{
            marginTop: 16
          }}>
          {uploading ? 'Uploading' : 'Start Upload'}
        </Button>
      </div>
      <Table dataSource={dataSource} columns={columns} style={{ marginTop: 20 }} />
    </MainLayout>
  );
};

export default Resources;
