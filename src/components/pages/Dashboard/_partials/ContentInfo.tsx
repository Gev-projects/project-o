import { Col, Row } from "antd";
import { FC, memo } from "react";
import { Paragraph, Title } from "@atoms";

interface Props {
  role: string;
  name?: string;
}

const ContentInfo: FC<Props> = (props) => {
  const { name, role } = props;
  return (
    <Row justify="space-between">
      <Col span={8}>
        <Row>
          <Col span={8}><Paragraph>{role}</Paragraph></Col>
          <Col offset={2}><Paragraph size="md">{name}</Paragraph></Col>
        </Row>
      </Col>
      <Col span={6}>
        <Row justify="space-between">
          <Col span={2} className='center-content'><Paragraph>2</Paragraph></Col>
          <Col span={2} className='center-content'><Paragraph>1</Paragraph></Col>
          <Col span={2} className='center-content'><Title size="md">1</Title></Col>
        </Row>
      </Col>
    </Row>
  );
};

export default memo(ContentInfo);