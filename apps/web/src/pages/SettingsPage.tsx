import { Card, Col, Empty, Row } from 'antd';

export function SettingsPage() {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} lg={12}>
        <Card title="Settings">
          <Empty description="Settings coming soon" />
        </Card>
      </Col>
    </Row>
  );
}
