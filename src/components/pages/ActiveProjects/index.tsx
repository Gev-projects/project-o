import './styles/styles.less';
import { Drawer, Input } from 'antd';
import { memo, useState } from 'react';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';

import Header from '../Header';
import { TimeSvg } from '@svgs';
import Data from './fake-data.json';
import { Paragraph, Title } from '@atoms';
import ActionButtons from '@components/ActionButtons';
import ActiveProjectCard from './_partials/ActiveProjectCard';

interface Props {
  collapsed: boolean;
  onCollapse: React.Dispatch<React.SetStateAction<boolean>>;
}

export default memo(function ActiveProjects(props: Props) {
  const { collapsed, onCollapse } = props;
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<any>();

  const projects = Data.map((project, index) => {
    const current = Data.find(i => i.id === project.id);

    return (
      <Droppable droppableId={project.name} key={project.id}>
        {
          (provided) => {
            return (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <ActiveProjectCard
                  clickFunc={() => {
                    setSelected(current);
                    setOpen(true);
                  }}
                  name={project.name}
                  logo={<TimeSvg fill='white' />}
                  members={project.members}
                />
                {provided.placeholder}
              </div>
            );
          }
        }
      </Droppable>
    );
  }
  );

  let drawerContent;
  if (selected) {
    drawerContent = (
      <div>
        <div className='drawer-content'>
          {<TimeSvg fill='white' height={60} width={60} />}
          <span>
            <Title className='drawer-project-title' size='md' bold>{selected.name}</Title>
            <Paragraph light size='md'>{`${selected.iteration}: ${selected.start} - ${selected.end}`}</Paragraph>
          </span>
        </div>
        <Input.TextArea className='drawer-textarea' placeholder='Add a note' bordered={false} />
        <ActionButtons />
      </div>
    );
  }

  function handleDragEnd(val: any) {
    const { destination, source } = val;
    const fromProjectName = source.droppableId;
    const toProjectName = destination.droppableId;
    const fromIndex = source.index;
    const toIndex = destination.index;
    const localData = Data;
    const fromProject = localData.filter(project => project.name === fromProjectName);
    const fromProjectIndex = localData.indexOf(fromProject[0]);
    const member = localData[fromProjectIndex].members[fromIndex];
    localData[fromProjectIndex].members.splice(fromIndex, 1);
    const toProject = localData.filter(project => project.name === toProjectName);
    const toProjectIndex = localData.indexOf(toProject[0]);
    localData[toProjectIndex].members.splice(toIndex, 0, member);
  }

  return (
    <div className="active-projects-page-container">
      <Header title='Total Billing 50.75 / 60' modal='AddProjectModal' collapsed={collapsed} onCollapse={onCollapse} showButton />
      <div className='active-projects-container'>
        <DragDropContext onDragEnd={(obj) => handleDragEnd(obj)}>
          {projects}
        </DragDropContext>
        <Drawer placement="right" onClose={() => setOpen(false)} open={open}>
          {drawerContent}
        </Drawer>
      </div>
    </div>
  );
});