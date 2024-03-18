import express, {Request, Response} from "express";

const app = express();
const port = 3000;

app.set('port', process.env.PORT || port);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;