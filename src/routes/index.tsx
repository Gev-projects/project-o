import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Users from '@components/pages/Users';
import AuthPage from '@components/pages/AuthPage'
import Dashboard from '@components/pages/Dashboard';
import ActiveProjects from '@components/pages/ActiveProjects';
import ArchivedProjects from '@components/pages/ArchivedProjects';

interface Props {
  collapsed: boolean;
  onCollapse: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppRoutes: FC<Props> = (props) => {
  const { collapsed, onCollapse } = props;
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard onCollapse={onCollapse} collapsed={collapsed} />} />
        <Route path="/active" element={<ActiveProjects onCollapse={onCollapse} collapsed={collapsed} />} />
        <Route path="/archived" element={<ArchivedProjects onCollapse={onCollapse} collapsed={collapsed} />} />
        <Route path="/users" element={<Users onCollapse={onCollapse} collapsed={collapsed} />} />
      </Routes>
    </>
  );
};

export default AppRoutes;