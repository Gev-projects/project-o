import { Layout } from "antd";
import { memo, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import AppRoutes from "@app/routes";
import { BurgerMenuSvg } from "@svgs";
import { Paragraph, Menu } from "@atoms";

const { Sider, Content } = Layout;

const paths = [{
  path: '/dashboard',
  selectedKey: ['2'],
}, {
  path: '/active',
  selectedKey: ['3'],
}, {
  path: '/archived',
  selectedKey: ['4'],
}, {
  path: '/users',
  selectedKey: ['5'],
}];

const CustomLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isAuth, setIsAuth] = useState(false)
  const { pathname } = useLocation();

  const defaultSelectedKeys = useMemo(() => paths.find((item) => item.path === pathname)?.selectedKey, [pathname]);
  return (
    isAuth?
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} width={234} collapsedWidth={0}>
        <Menu
          mode="inline"
          defaultSelectedKeys={defaultSelectedKeys}
          items={[
            {
              key: '1',
              icon: <BurgerMenuSvg onClick={() => setCollapsed(!collapsed)} />,
              label: '',
              disabled: true,
            },
            {
              key: '2',
              label: <Link to={'/dashboard'}><Paragraph size="md">Dashboard</Paragraph></Link>,
            },
            {
              key: '3',
              label: <Link to={'/active'}><Paragraph size="md">Active Projects</Paragraph></Link>,
            },
            {
              key: '4',
              label: <Link to={'/archived'}><Paragraph size="md">Archived Projects</Paragraph></Link>,
            },
            {
              key: '5',
              label: <Link to={'/users'}><Paragraph size="md">Users</Paragraph></Link>,
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Content>
          <AppRoutes onCollapse={setCollapsed} collapsed={collapsed} />
        </Content>
      </Layout>
      </Layout>
      : <AuthPage authorize={setIsAuth} />
  );
};

export default memo(CustomLayout);    