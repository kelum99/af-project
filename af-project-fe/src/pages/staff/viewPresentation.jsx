import React, { useState, useEffect } from "react";
import { Table, Menu,  Space, Form, Select, Option,Button } from 'antd';
import { StaffHeader } from "../../components/Headers";

function viewPresentation(){

   
    const [loading, setLoading] = useState(true);
    const { request } = useRequest();
    const [markList, setMarkList] = useState([]);
    const history = useHistory();
    const { user } = useUser();
    let doc;
 
   
     const columns = [
         {
           title: 'Group ID',
           dataIndex: 'groupid',
           key: 'groupid',
         },
 
         {
           title: 'Topic',
           dataIndex: 'topic',
           key: 'topic',
         },
 
        
 
         
       ];
 
 
       const dataSource = [
         {
           key: '1',
           groupid: 'PD100',
           topic: 'Retail Apoocalypse',
         },
         {
           key: '2',
           groupid: 'PD100',
           topic: 'Retail Apoocalypse',
         },
 
         {
             key: '3',
             groupid: 'PD100',
           topic: 'Retail Apoocalypse',
           },
 
           {
            groupid: 'PD100',
           topic: 'Retail Apoocalypse',
           },
 
         
       ];
 
       const { Option } = Select;
 
       return(
         <StaffHeader>
        <>
            <div className = "MainContaner-display">
        
       
        
        <Table columns={columns}
         dataSource={dataSource}
         id="printTable" 
         size="middle"
         pagination={false}/>
            
            </div>
        
        <Button type="primary" className="AddButton"  icon={<DownloadOutlined />} onClick={downloadPDF}>
       ADD Marks
        </Button>
        
        </>   
        </StaffHeader> 
        ); 
        }
        
         export default viewPresentation;