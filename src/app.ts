import express, {Request, Response} from "express";

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;