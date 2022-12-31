import { Col, Row } from 'antd';
import { FC, memo, useState } from 'react';

import Header from '../Header';
import CharBarX from './chars/CharBarX';
import CharBarY from './chars/CharBarY';
import ProjectHeader from './_partials/ProjectHeader';
import ProjectContent from './_partials/ProjectContent';
import DashboardWrapper from './styled/DashboardWrapper';
import { Collapse, Paragraph, Statistic, Title } from '@atoms';

import blink from '@images/blink.png';
import intelliHealth from '@images/intelli-health.png';
import EmployeeModal from '@components/Employees/EmployeesModal';
import { AugustSvg, ChalkboardSvg, CrioSvg, MdSaveSvg, OctaveSvg, PeerTreeSvg, VigilantSvg } from '@svgs';

interface Props {
  collapsed: boolean;
  onCollapse: React.Dispatch<React.SetStateAction<boolean>>;
}

const projects = [
  { name: 'Octave', date: 'Jan 15 - Sep 15', icon: <OctaveSvg /> },
  { name: 'Chalkboard', date: 'Jan 15 - Sep 15', icon: <ChalkboardSvg /> },
  { name: 'Crio', date: 'Jan 15 - Sep 15', icon: <CrioSvg /> },
  { name: 'August', date: 'Jan 15 - Sep 15', icon: <AugustSvg /> },
  { name: 'MDsave', date: 'Jan 15 - Sep 15', icon: <MdSaveSvg /> },
  { name: 'Peer-Tree', date: 'Jan 15 - Sep 15', icon: <PeerTreeSvg /> },
  { name: 'IntelliHealth', date: 'Jan 15 - Sep 15', icon: <img alt='intelliHealthLogo' src={intelliHealth} /> },
  { name: 'Vigilant', date: 'Jan 15 - Sep 15', icon: <VigilantSvg /> },
  { name: 'Blink', date: 'Jan 15 - Sep 15', icon: <img alt='blink' src={blink} /> },
];

const { Panel } = Collapse;

const Dashboard: FC<Props> = (props) => {
  const { collapsed, onCollapse } = props;
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Header title='Dashboard' collapsed={collapsed} onCollapse={onCollapse} />
      <DashboardWrapper>
        <EmployeeModal isOpen={isOpen} onCancel={() => setOpen(false)} />
        <Row gutter={20}>
          <Col span={16}>
            <Row>
              <Col span={24}>
                <Row justify='space-between'>
                  <Col span={6}>
                    <Title size='md'>Project</Title>
                  </Col>
                  <Col span={6}>
                    <Row justify='space-between'>
                      <Col><Title size='md'>Total</Title></Col>
                      <Col><Title size='md'>Non billiable</Title></Col>
                      <Col><Title size='md'>Billiable</Title></Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                {projects.map((item, index) => {
                  return (
                  <Collapse key={index} expandIcon={() => item.icon} bordered={false} defaultActiveKey={index === 0 ? ['1'] : 0}>
                    <Panel header={<ProjectHeader name={item.name} date={item.date} />} key="1">
                      <ProjectContent setModalOpen={() => setOpen(!isOpen)} />
                    </Panel>
                  </Collapse>
                  )
                  }
                )}
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Row className="stats" gutter={[0, 8]}>
              <Col span={24} className='cont1'>
                <Row>
                  <Col span={24}><Statistic value={50.75} suffix="/ 67" /></Col>
                  <Col span={24}><Paragraph bold>Total Billing</Paragraph></Col>
                </Row>
              </Col>
              <div onClick={() => setOpen(true)}>
                <Col span={24} className='cont2'>
                  <Row>
                    <Col span={24} className='justify-start'><Paragraph bold>Total Employees</Paragraph>&nbsp;<Title size='md' bold>67</Title></Col>
                    <Col span={24}><CharBarX /></Col>
                  </Row>
                </Col>
              </div>
              <div onClick={() => setOpen(true)}>
                <Col span={24} className='cont3'>
                  <Row>
                    <Col span={24} className='justify-start'><Paragraph bold>Total Engineers</Paragraph>&nbsp;<Title size='md' bold>54</Title></Col>
                    <Col span={24}><CharBarY /></Col>
                  </Row>
                </Col>
              </div>
            </Row>
          </Col>
        </Row>
      </DashboardWrapper>
    </>
  );
};

export default memo(Dashboard);