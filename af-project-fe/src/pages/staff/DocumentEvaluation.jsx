import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import './DocumentEvaluation.css';
import useRequest from '../../services/RequestContext';
import { StaffHeader } from '../../components/Headers';

const columns = [
  {
    title: 'File Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Group',
    dataIndex: 'groupId',
    key: 'groupId'
  },
  {
    title: 'Download Link',
    dataIndex: 'url',
    key: 'url',
    render: (val) => (
      <Button type="primary">
        <a href={val}>Download</a>
      </Button>
    )
  }
];

const DocumentEvaluation = () => {
  const { request } = useRequest();
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await request.get('resource/document');
      if (res.status === 200) {
        setData(res.data);
      } else {
        message.error('Failed!');
      }
    } catch (e) {
      console.log('error!', e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <StaffHeader>
      <div>
        <center>
          <h1 className="header-text">Document Evaluation</h1>
          <Table columns={columns} dataSource={data} size="middle" style={{ width: '80%' }} />
        </center>
      </div>
    </StaffHeader>
  );
};
export default DocumentEvaluation;
