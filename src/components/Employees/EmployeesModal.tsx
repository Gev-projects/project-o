import { FC } from "react";
import { Col, Row } from "antd";

import { CloseSvg } from '@svgs';
import EmployeeCard from "./EmployeeCard";
import { Modal, Paragraph, Title } from "@atoms";
import employeeAvatar from '@images/employee-avatar.png';

interface Props {
    isOpen: boolean;
    onCancel: () => void;
}

const employees = [{
    avatar: <img alt='employeeAvatar' src={employeeAvatar} />,
    name: 'Hayk Baghdasaryan',
    role: "TRP, Front",
    desc: "Description",
},
{
    avatar: <img alt='employeeAvatar' src={employeeAvatar} />,
    name: 'Hayk Baghdasaryan',
    role: "TRP, Front",
    desc: "Description",
},
{
    avatar: <img alt='employeeAvatar' src={employeeAvatar} />,
    name: 'Hayk Baghdasaryan',
    role: "TRP, Front",
    desc: "Description",
},
{
    avatar: <img alt='employeeAvatar' src={employeeAvatar} />,
    name: 'Hayk Baghdasaryan',
    role: "TRP, Front",
    desc: "Description",
},
{
    avatar: <img alt='employeeAvatar' src={employeeAvatar} />,
    name: 'Hayk Baghdasaryan',
    role: "TRP, Front",
    desc: "Description",
}, {
    avatar: <img alt='employeeAvatar' src={employeeAvatar} />,
    name: 'Hayk Baghdasaryan',
    role: "TRP, Front",
    desc: "Description",
}];

const EmployeesModal: FC<Props> = (props) => {
    const { isOpen, onCancel } = props;
    return (
        <>
            <Modal
                centered
                footer={null}
                open={isOpen}
                onCancel={onCancel}
                width={724}
                okText='Save'
                closeIcon={<CloseSvg />}
            >
                <Row gutter={[0, 10]}>
                    <Col span={24}><Title>Team</Title></Col>
                    <Col span={24}>
                        <Row gutter={12}>
                            <Col><Paragraph size="md">All Employees (10)</Paragraph></Col>
                            <Col><Paragraph size="md">Engineers (6)</Paragraph></Col>
                            <Col><Paragraph size="md">PM & PMA (2)</Paragraph></Col>
                            <Col><Paragraph size="md">Designers (1)</Paragraph></Col>
                            <Col>QA (1)</Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Row gutter={[12, 20]}>
                            {employees.map((item, index) =>
                                <Col key={index}>
                                    <EmployeeCard avatar={item.avatar} name={item.name} role={item.role} desc={item.desc} />
                                </Col>)}
                        </Row>
                    </Col>
                </Row>
            </Modal>
        </>

    );
};

export default EmployeesModal;