import { FC, memo } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { NodeElement } from 'rc-tree/lib/interface';

import { Paragraph, Title } from '@atoms';
import employeeAvatar from '@images/employee-avatar.png';

interface DataType {
    key: string;
    fullName: NodeElement;
    nickname: NodeElement;
    position: NodeElement;
    description: NodeElement;
}

const columns: ColumnsType<DataType> = [
    {
        title: <Title size='sm'>Full name</Title>,
        dataIndex: 'fullName',
        key: 'fullName',
    },
    {
        title: <Title size='sm'>Nickname</Title>,
        dataIndex: 'nickname',
        key: 'nickname',
    },
    {
        title: <Title size='sm'>Position</Title>,
        dataIndex: 'position',
        key: 'position',
    },
    {
        title: <Title size='sm'>Description</Title>,
        dataIndex: 'description',
        key: 'description',
    },
];

const data: DataType[] = [
    {
        key: '1',
        fullName: <><img alt='employeeAvatar' src={employeeAvatar} width={34} height={34} /><Paragraph size='md'>Marina Berberian</Paragraph></>,
        nickname: <Paragraph size='md'>Marina</Paragraph>,
        position: <Paragraph size='md'>Designer</Paragraph>,
        description: <Paragraph size='md'>I enjoy spending a lot of time playing sports and team games</Paragraph>,
    },
    {
        key: '2',
        fullName: <><img alt='employeeAvatar' src={employeeAvatar} width={34} height={34} /><Paragraph size='md'>Marina Berberian</Paragraph></>,
        nickname: <Paragraph size='md'>Marina</Paragraph>,
        position: <Paragraph size='md'>Designer</Paragraph>,
        description: <Paragraph size='md'>I enjoy spending a lot of time playing sports and team games</Paragraph>,
    },
    {
        key: '3',
        fullName: <><img alt='employeeAvatar' src={employeeAvatar} width={34} height={34} /><Paragraph size='md'>Marina Berberian</Paragraph></>,
        nickname: <Paragraph size='md'>Marina</Paragraph>,
        position: <Paragraph size='md'>Designer</Paragraph>,
        description: <Paragraph size='md'>I enjoy spending a lot of time playing sports and team games</Paragraph>,
    },
    {
        key: '4',
        fullName: <><img alt='employeeAvatar' src={employeeAvatar} width={34} height={34} /><Paragraph size='md'>Marina Berberian</Paragraph></>,
        nickname: <Paragraph size='md'>Marina</Paragraph>,
        position: <Paragraph size='md'>Designer</Paragraph>,
        description: <Paragraph size='md'>I enjoy spending a lot of time playing sports and team games</Paragraph>,
    },
];

const UsersTable: FC = () => {
    return (
            <Table columns={columns} dataSource={data}></Table>
    );
};

export default memo(UsersTable);