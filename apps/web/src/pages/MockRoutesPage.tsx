import { Card, Col, Empty, Row } from 'antd';

export function MockRoutesPage() {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Card title="Mock Routes">
          <Empty description="No mock routes yet" />
        </Card>
      </Col>
    </Row>
  );
}
