import { FC, memo } from 'react';
import { Col, Row } from 'antd';
import { Button } from '@atoms';

type Props = {
  cancelText?: string,
  saveText?: string,
  className?: string,
  onCancel?: () => void,
  onSave?: () => void,
};

const ActionButtons: FC<Props> = (props) => {
  const { cancelText = 'Cancel', saveText = 'Save', onCancel, onSave } = props;
  return (
    <Row justify='center' gutter={[12, 12]} className='action-buttons'>
      <Col>
        <Button type='secondary' onClick={onCancel} size='small'>
          {cancelText}
        </Button>
      </Col>
      <Col>
        <Button type='primary' onClick={onSave} size='small'>
          {saveText}
        </Button>
      </Col>
    </Row>
  );
};

export default memo(ActionButtons);