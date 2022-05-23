import { Modal } from 'antd';
import React from 'react';

const StudentUpdateModal = (props) => {
  return (
    <Modal
      title="Student Update Form"
      visible={props.visible}
      onCancel={props.onCancel}
      footer={null}
      width={800}>
      <h3>adas</h3>
    </Modal>
  );
};

export default StudentUpdateModal;
