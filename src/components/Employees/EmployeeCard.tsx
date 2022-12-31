import { FC } from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components';

import colors from '@atoms/colors';
import { Button, Paragraph, Title } from '@atoms';

const CardWrapper = styled('div')`
    width: 220px;
    padding: 12px;
    background: ${colors.background};
    border-radius: 6px;
`;

interface Props {
    avatar: JSX.Element;
    name: string;
    role: string;
    desc: string;

};

const EmployeeCard: FC<Props> = (props) => {
    const { avatar, name, role, desc } = props;
    return (
        <CardWrapper>
            <Row gutter={[0, 12]}>
                <Col span={24}>{avatar}</Col>
                <Col span={24}>
                    <Title size='md' bold>{name}</Title>
                    <Paragraph size='sm' light>{role}</Paragraph>
                </Col>
                <Col span={24}>
                    <Paragraph>{desc}</Paragraph>
                </Col>
                <Col span={24}>
                    <Button type='link'>View Profile</Button>
                </Col>
            </Row>
        </CardWrapper>
    );
};

export default EmployeeCard;