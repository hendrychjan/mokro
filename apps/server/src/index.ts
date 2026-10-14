import express from 'express';
import type { HealthResponse } from '@mokro/shared';

const port = Number(process.env.PORT) || 3001;

const app = express();

app.get('/health', (_req, res) => {
  const body: HealthResponse = { status: 'ok', uptime: process.uptime() };
  res.json(body);
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
