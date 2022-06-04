import React from 'react';
import { Table, Card } from 'antd';
import "./DocumentEvaluation.css";
import { storage } from '../../services/Firebase';


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