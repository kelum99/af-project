import React, { useState, useEffect } from 'react';
import { Table, Card } from 'antd';
import "./DocumentEvaluation.css";
import { storage } from '../../services/Firebase';
import useRequest from '../../services/RequestContext';


const columns = [
    {
        title: 'File Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: 'Download Link',
        dataIndex: 'url',
        key: 'url',
        render: (val) => <a>{val}</a>
    }
];

const DocumentEvaluation = () => {
    const { request } = useRequest();
    const [data, setData] = useState();
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
    return(
        <div>
            <h1 className='header-text'>Document Evaluation</h1>
            <Card class>
                <Table columns={columns} size="middle"/>
            </Card>
        </div>
    );
};
export default DocumentEvaluation;