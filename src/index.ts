import * as express from 'express';
import { Request, Response } from 'express';

const { NODE_ENV } = process.env
const app = express();

const {
  PORT = 3000,
} = process.env;

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'hello world',
  });
});

if (NODE_ENV !== 'testing') {
  app.listen(PORT, () => {
    console.log('server started at http://localhost:'+PORT);
  });
}

export default app;
