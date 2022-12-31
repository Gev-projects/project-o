import { Col, Row } from "antd";
import { FC, memo, useState } from "react";

import { Button, Title } from "@atoms";
import { AddSvg, BurgerMenuSvg } from "@svgs";
import HeaderWrapper from "./styled/HeaderWrapper";
import NewEmployeeModal from "./modals/NewEmployeeModal";
import AddProjectModal from '@components/pages/ActiveProjects/_partials/AddProjectModal';

interface Props {
    title: string;
    showButton?: boolean;
    collapsed: boolean;
    onCollapse: React.Dispatch<React.SetStateAction<boolean>>;
    modal?: 'AddProjectModal' | 'NewEmployeeModal';
}


const Header: FC<Props> = (props) => {
    const { title, showButton, collapsed, onCollapse, modal } = props;
    const [isModalOpen, setModalOpen] = useState(false);

    const modals = {
        'AddProjectModal': <AddProjectModal open={isModalOpen} onCancel={() => setModalOpen(false)} />,
        'NewEmployeeModal': <NewEmployeeModal isOpen={isModalOpen} onCancel={() => setModalOpen(false)} />
    };

    return (
        <HeaderWrapper>
            <Row justify="space-between" className="header-container">
                <Col className='header-title-container'>
                    {collapsed && <BurgerMenuSvg onClick={() => onCollapse(false)} />}
                    <Title className={collapsed ? '' : 'collapsed'} size='lg'>{title}</Title>
                </Col>
                <Col>
                    {
                        showButton &&
                        <Button
                            type="icon"
                            size='small'
                            icon={<AddSvg height={16} width={16} fill='#FFFFFF' />}
                            onClick={() => setModalOpen(true)}
                        />
                    }
                </Col>
            </Row>
            {modals[modal as keyof typeof modals]}
        </HeaderWrapper>
    );
};

export default memo(Header);