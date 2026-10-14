import { useEffect, useState } from 'react';
import { Flex, Layout, Menu, Tag, Typography, theme } from 'antd';
import { HealthResponseSchema } from '@mokro/shared';
import { MockRoutesPage } from './pages/MockRoutesPage';
import { SettingsPage } from './pages/SettingsPage';

const pages = {
  routes: { label: 'Mock Routes', element: <MockRoutesPage /> },
  settings: { label: 'Settings', element: <SettingsPage /> },
};

type PageKey = keyof typeof pages;

function useServerOnline() {
  const [online, setOnline] = useState<boolean | null>(null);

  useEffect(() => {
    fetch('/health')
      .then((res) => res.json())
      .then((data) => setOnline(HealthResponseSchema.safeParse(data).success))
      .catch(() => setOnline(false));
  }, []);

  return online;
}

export function Dashboard() {
  const [page, setPage] = useState<PageKey>('routes');
  const online = useServerOnline();
  const { token } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Sider breakpoint="lg" collapsedWidth={0}>
        <Typography.Title level={4} style={{ color: token.colorWhite, padding: token.padding, margin: 0 }}>
          Mokro
        </Typography.Title>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[page]}
          items={Object.entries(pages).map(([key, { label }]) => ({ key, label }))}
          onClick={({ key }) => setPage(key as PageKey)}
        />
      </Layout.Sider>
      <Layout>
        <Layout.Header style={{ background: token.colorBgContainer, paddingInline: token.paddingLG }}>
          <Flex justify="space-between" align="center" style={{ height: '100%' }}>
            <Typography.Title level={4} style={{ margin: 0 }}>
              {pages[page].label}
            </Typography.Title>
            {online === null ? (
              <Tag>Checking server…</Tag>
            ) : (
              <Tag color={online ? 'success' : 'error'}>{online ? 'Server online' : 'Server offline'}</Tag>
            )}
          </Flex>
        </Layout.Header>
        <Layout.Content style={{ padding: token.paddingLG }}>{pages[page].element}</Layout.Content>
      </Layout>
    </Layout>
  );
}
