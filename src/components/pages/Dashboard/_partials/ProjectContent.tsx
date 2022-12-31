import { Col, Row } from "antd";
import { FC, memo } from "react";

import { Button } from "@atoms";
import ContentInfo from "./ContentInfo";


interface Props {
  pm?: string[];
  trp?: string[];
  designers?: string[];
  qa?: string[];
  engineers?: string[];
  setModalOpen?: () => void;
}

const ProjectContent: FC<Props> = (props) => {
  const { setModalOpen } = props;
  return (
    <>
      <Row gutter={[0, 14]}>
        <Col span={24}>
          <ContentInfo name="Inna Arzumanyan" role="PM & PMA" />
        </Col>

        <Col span={24}>
          <ContentInfo name="Hayk Baghdasaryan" role="TRP" />
        </Col>

        <Col span={24}>
          <ContentInfo role="Designers" />
        </Col>

        <Col span={24}>
          <ContentInfo role="QA" />
        </Col>

        <Col span={24}>
          <ContentInfo role="Engineers" />
        </Col>

        <Col span={24}>
          <Button type="link" onClick={setModalOpen}>See team</Button>
        </Col>
      </Row>

    </>
  );
};


export default memo(ProjectContent);