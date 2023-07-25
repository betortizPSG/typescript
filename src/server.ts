import express from 'express';
import { createCourse } from './routes';

const app = express();

const port = process.env.PORT || 3000;

app.get('/', createCourse); // método get da rota createCourse que está no arquivo routes.ts

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
    }
);

