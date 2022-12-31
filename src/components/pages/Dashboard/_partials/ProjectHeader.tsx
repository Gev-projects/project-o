import { Row, Col } from "antd";
import { FC, memo } from "react";
import { Paragraph, Title } from "@atoms";

interface Props {
  name: string;
  date?: string;
  total?: number;
  nonBill?: number;
  bill?: number;
}

const ProjectHeader: FC<Props> = (props) => {
  const { name, date } = props;
  return (
      <Row justify="space-between">
        <Col span={8} className='project-title'>
          <Title size='md' bold>{name}</Title>&nbsp;
          <Paragraph>{date}</Paragraph>
        </Col>
        <Col span={6}>
          <Row justify="space-between">
            <Col span={2} className='center-content'><Paragraph>11</Paragraph></Col>
            <Col span={2} className='center-content'><Paragraph>12</Paragraph></Col>
            <Col span={2} className='center-content'><Title size="md" bold>13</Title></Col>
          </Row>
        </Col>
      </Row>
  );
};


export default memo(ProjectHeader);