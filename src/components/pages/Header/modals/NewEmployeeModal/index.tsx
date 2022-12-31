import { FC, useState } from "react";
import { Col, Row, Upload, } from "antd";

import colors from "@atoms/colors";
import empty from '@images/empty.png';
import Wrapper from './styled/Wrapper';
import ActionButtons from "@components/ActionButtons";
import { AddSvg, CloseSvg, MinusSvg, SearchSvg } from '@svgs';
import { Button, Form, Input, Modal, Radio, Title, Select, Checkbox } from "@atoms";

type Props = {
  isOpen: boolean,
  onCancel: () => void,
};

const selectOptions = [
  {
    value: 'fullstack',
    label: 'Full Stack',
  },
  {
    value: 'frontend',
    label: 'Front End',
  },
  {
    value: 'backjs',
    label: 'Back JS',
  },
  {
    value: 'backphp',
    label: 'Back PHP',
  },
  {
    value: 'reactnative',
    label: 'React Native',
  },
  {
    value: 'iosnative',
    label: 'IOS Native',
  },
];

const NewEmployeeModal: FC<Props> = (props) => {
  const { isOpen, onCancel } = props;
  const [image, setImage] = useState('');
  const [inputValues, setInputValues] = useState({
    position: '',
  });

  return (
    <Modal
      centered
      footer={null}
      open={isOpen}
      onCancel={onCancel}
      width={528}
      okText='Save'
      closeIcon={<CloseSvg />}
    >
      <Title>New Employee</Title>
      <Wrapper>
        <Form
          name="basic"
          layout="vertical"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Row gutter={[36, 0]}>
            <Col span={10}>
              <Form.Item>
                <img src={image ? image : empty} alt="avatar" height={128} width={196} />
                {
                  image ?
                    <Button
                      type='link'
                      size='small'
                      onClick={() => setImage("")}
                      icon={
                        <MinusSvg
                          fill={colors.error}
                          height={16}
                          width={16}
                        />
                      }
                    >
                      Remove
                    </Button>
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
                            width={16}
                          />
                        }
                        size='small'>
                        Add Image
                      </Button>
                    </Upload>
                }
              </Form.Item>
            </Col>
            <Col span={14}>
              <Form.Item
                label="Full name"
                name="fullname"
              >
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item
                label="Nickname"
                name="nickname"
              >
                <Input placeholder="Nickname" />
              </Form.Item>
              <Form.Item
                label="Description"
                name="description"
              >
                <Input.TextArea placeholder="Type a description..." />
              </Form.Item>

              <Form.Item
                label="Position"
                name="position"
              >
                <Radio.Group onChange={e => setInputValues({ position: e.target.value })}>
                  <Radio value='pm' size="small">PM</Radio>
                  <Radio value='qa' size="small">QA</Radio>
                  <Radio value='engineer' size="small">Engineer</Radio>
                  <Radio value='designer' size="small">Designer</Radio>
                </Radio.Group>
              </Form.Item>

              {inputValues.position === 'engineer' && (
                <>
                  <Form.Item
                    label="Choose"
                    name="choose"
                  >
                    <Select placeholder='Choose' suffixIcon={<SearchSvg />} options={selectOptions}
                    />
                  </Form.Item>
                  <Form.Item
                    name="checkbox"
                  >
                    <Checkbox size="small">TRP</Checkbox>
                  </Form.Item>
                </>
              )}
            </Col>
          </Row>
          <ActionButtons onCancel={() => onCancel()} className='action-buttons'/>
        </Form>
      </Wrapper >
    </Modal >
  );
};

export default NewEmployeeModal;