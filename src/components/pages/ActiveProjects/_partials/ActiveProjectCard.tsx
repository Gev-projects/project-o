import '../styles/styles.less';
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { memo, useMemo } from 'react';
import { Draggable } from '@hello-pangea/dnd';

import Member from './MemberCard'
import colors from '@atoms/colors';
import { ThreeDotsSvg, AddSvg } from '@svgs';
import { Button, Title, Paragraph } from '@atoms'

type Props = {
  logo: JSX.Element | string,
  name: string,
  members: {
    name: string,
    position: string,
    billiable: number,
    memberId: number,
  }[],
  clickFunc?: () => void,
}

export default memo(function ActiveProjectCard(props: Props) {
  const { logo, name, members, clickFunc } = props;
  const items: MenuProps['items'] = useMemo(() => [
    {
      key: '1',
      label: 'Edit',
    },
    {
      key: '2',
      label: 'Duplicate',
    },
    {
      key: '3',
      label: 'Add a note',
      onClick: clickFunc,
    },
    {
      key: '4',
      label: 'Archive',
    }
  ], [clickFunc])

  return (
    <div className='project-card'>
      <div className='project-card-title'>
        {logo}
        <Title size='md' bold className="project-name">{name}</Title>
        <div className='three-dots-btn-container'>
          <Dropdown menu={{ items }} placement='bottom'>
            <ThreeDotsSvg className='three-dots-btn' />
          </Dropdown>
        </div>
      </div>
      <div className='project-card-header'>
        <div>
          <Paragraph size='sm'>Team</Paragraph>
          <Paragraph size='md' bold>{`${members.length}`}</Paragraph>
        </div>
        <div className='header-bill'>
          <Paragraph size='sm'>Bill</Paragraph>
          <Paragraph size='md' bold>4</Paragraph>
        </div>
      </div>
      <>
        {
          members.map((member, index) => {
            return (
              <Draggable draggableId={member.memberId.toString()} key={member.memberId} index={index}>
                {
                  (provided) => {
                    return (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        draggable={true}
                      >
                        <Member
                          key={index}
                          name={member.name}
                          position={member.position}
                          billiable={member.billiable}
                        />
                      </div>
                    )
                  }
                }
              </Draggable>
            )
          }
          )
        }
      </>
      <div className='add-member-btn'>
        <Button type='link'
          icon={
            <AddSvg fill={colors.primary_main}
              height={16}
              width={16} />
          } size='small' >Add</Button>
      </div>
    </div >
  )
})