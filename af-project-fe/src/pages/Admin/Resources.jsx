import React, { useState, useEffect } from 'react';
import MainLayout from '../../components/MainLayout';
import { Table, Upload, message, Button, Space } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { storage } from '../../services/Firebase';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import useRequest from '../../services/RequestContext';

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
    key: 'url',
    render: (val) => <a>{val}</a>
  }
];

const Resources = () => {
  const { Dragger } = Upload;
  const { request } = useRequest();

  const [file, setFile] = useState();
  const [data, setData] = useState();
  const [uploading, setUploading] = useState(false);
  const [fileUrl, setFileUrl] = useState(null);

  const addData = async () => {
    try {
      if (file && fileUrl) {
        const res = await request.post('resource', {
          name: file.name,
          type: file.type,
          url: fileUrl
        });
        if (res.status === 201) {
          message.success('Successfully Saved!');
          setFileUrl(undefined);
          setFile(undefined);
          getData();
        } else {
          message.error('Save Failed!');
        }
      }
    } catch (e) {
      console.log('error!', e);
    }
  };
  const getData = async () => {
    try {
      const res = await request.get('resource');
      if (res.status === 200) {
        setData(res.data);
      } else {
        message.error('Failed!');
      }
    } catch (e) {
      console.log('error!', e);
    }
  };
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
          .finally(() => {
            setUploading(false);
          });
      });
    }
  };
  useEffect(() => {
    getData();
  }, []);

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
        <Space>
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
          <Button
            type="primary"
            disabled={!fileUrl}
            onClick={addData}
            loading={uploading}
            style={{
              marginTop: 16
            }}>
            Confirm
          </Button>
        </Space>
      </div>
      <Table dataSource={data} columns={columns} style={{ marginTop: 20 }} />
    </MainLayout>
  );
};

export default Resources;
