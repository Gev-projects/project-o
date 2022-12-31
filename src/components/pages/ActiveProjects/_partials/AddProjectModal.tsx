/* eslint-disable jsx-a11y/img-redundant-alt */
import '../styles/styles.less';
import { memo, useState } from 'react';
import { DatePicker, Form, Upload } from 'antd';

import colors from '@atoms/colors';
import EmptyImage from '@images/empty-image.png';
import { Button, Input, Modal, Title } from "@atoms";
import { SearchSvg, AddSvg, MinusSvg } from '@svgs';
import ActionButtons from '@components/ActionButtons';

type Props = {
  open: boolean,
  onCancel: () => void;
};

export default memo(function AddProjectModal(props: Props) {
  const { open, onCancel } = props;
  const [image, setImage]: any = useState();

  return (
    <Modal open={open} onCancel={onCancel} footer={null} width={624}>
      <Title className="modal-title">New project</Title>
      <Form labelCol={{ span: 8, offset: 12 }}>
        <div className='modal-container'>
          <div className='project-form'>
            <Form.Item className='add-img-block'>
              <img src={image ? image : EmptyImage} alt="project-logo" height={60} width={60} />
              {
                image ?
                  <Button
                    type='link'
                    size='small'
                    className='delete-color'
                    onClick={() => setImage("")}
                    icon={
                      <MinusSvg
                        fill={colors.error}
                        height={16}
                        width={16}
                      />
                    }
                  > Remove</Button>
                  :
                  <Upload
                    beforeUpload={(file) => {
                      return false;
                    }}
                    onChange={(e) => {
                      if (e.file instanceof Blob) {
                        const file: Blob = e.file;
                        setImage(URL.createObjectURL(file));
                      }
                    }}
                  >
                    <Button
                      type='link'
                      icon={
                        <AddSvg fill={colors.primary_main}
                          height={16}
                          width={16} />
                      }
                      size='small'>
                      Add Logo
                    </Button>
                  </Upload>
              }
            </Form.Item>

            <div className='modal-input-form-section'>
              <Form.Item label="Project-name" labelCol={{ span: 24 }}>
                <Input placeholder='Title' />
              </Form.Item>
              <Form.Item label="Start date" className='start-date' labelCol={{ span: 24 }}>
                <DatePicker placeholder='YYYY-MM-DD' />
              </Form.Item>
              <Form.Item label="End date" className='end-date' labelCol={{ span: 24 }}>
                <DatePicker placeholder='YYYY-MM-DD' />
              </Form.Item>
              <Form.Item label="Iteration" labelCol={{ span: 24 }}>
                <Input placeholder='E: Iteration 1' />
              </Form.Item>
            </div>
          </div>

          <div className='add-members-section'>
            <Form.Item label="Add members" labelCol={{ span: 24 }}>
              <Input placeholder='Search by name' suffix={<SearchSvg />} />
            </Form.Item>
          </div>
        </div>
        <ActionButtons />
      </Form>
    </Modal >
  );
});