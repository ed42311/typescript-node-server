import * as express from 'express';
import { Request, Response } from 'express';

const { NODE_ENV, PORT } = process.env
const app = express();

const port = NODE_ENV === 'development' ? 3000 : PORT;

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'hello world',
  });
});

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});

export default app;
