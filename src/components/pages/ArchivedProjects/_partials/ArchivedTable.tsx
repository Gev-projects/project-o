import { FC, memo } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { NodeElement } from 'rc-tree/lib/interface';

import { OctaveSvg } from '@svgs';
import { Paragraph, Title } from '@atoms';

interface DataType {
    key: string;
    projectName: NodeElement;
    createdDate: NodeElement;
    archivedDate: NodeElement;
    team: NodeElement;
    billiable: NodeElement;
}

const columns: ColumnsType<DataType> = [
    {
        title: <Title size='sm'>Project name</Title>,
        dataIndex: 'projectName',
        key: 'projectName',
    },
    {
        title: <Title size='sm'>Date created</Title>,
        dataIndex: 'createdDate',
        key: 'createdDate',
    },
    {
        title: <Title size='sm'>Data Archived</Title>,
        dataIndex: 'archivedDate',
        key: 'archivedDate',
    },
    {
        title: <Title size='sm'>Team</Title>,
        dataIndex: 'team',
        key: 'team',
    },
    {
        title: <Title size='sm'>Billiable</Title>,
        dataIndex: 'billiable',
        key: 'billiable',
    },
];

const data: DataType[] = [
    {
        key: '1',
        projectName: <><OctaveSvg /><Paragraph size='md'>Octave</Paragraph></>,
        createdDate: <Paragraph size='md'>22 Mar 2019</Paragraph>,
        archivedDate: <Paragraph size='md'>Dec 15 2022</Paragraph>,
        team: <Paragraph size='md'>10</Paragraph>,
        billiable: <Paragraph size='md'>6</Paragraph>,
    },
    {
        key: '2',
        projectName: <><OctaveSvg /><Paragraph size='md'>Octave</Paragraph></>,
        createdDate: <Paragraph size='md'>22 Mar 2019</Paragraph>,
        archivedDate: <Paragraph size='md'>Dec 15 2022</Paragraph>,
        team: <Paragraph size='md'>10</Paragraph>,
        billiable: <Paragraph size='md'>6</Paragraph>,
    },
    {
        key: '3',
        projectName: <><OctaveSvg /><Paragraph size='md'>Octave</Paragraph></>,
        createdDate: <Paragraph size='md'>22 Mar 2019</Paragraph>,
        archivedDate: <Paragraph size='md'>Dec 15 2022</Paragraph>,
        team: <Paragraph size='md'>10</Paragraph>,
        billiable: <Paragraph size='md'>6</Paragraph>,
    },
    {
        key: '4',
        projectName: <><OctaveSvg /><Paragraph size='md'>Octave</Paragraph></>,
        createdDate: <Paragraph size='md'>22 Mar 2019</Paragraph>,
        archivedDate: <Paragraph size='md'>Dec 15 2022</Paragraph>,
        team: <Paragraph size='md'>10</Paragraph>,
        billiable: <Paragraph size='md'>6</Paragraph>,
    },
];

const ArchivedTable: FC = () => {
    return (
            <Table columns={columns} dataSource={data}></Table>
    );
};

export default memo(ArchivedTable);