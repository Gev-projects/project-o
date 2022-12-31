import { Modal as antModal } from 'antd';
import styled from 'styled-components';

const Modal = styled(antModal)`
.ant-modal-close-x {
  svg {
    position: absolute;
    top: 20px;
    right: 20px;
  }
}
 .ant-modal-body {
   padding: 20px;
   .action-buttons {
     margin-top: 18px;
   }
 }
 .ant-modal-content {
   border-radius: 6px;
 }
 .ant-modal-footer {
   display: flex;
   justify-content: center;
 }
  form {
   margin-top: 20px;
  }
`;

export default Modal;