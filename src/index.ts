import './config'; // Load environment variables

import express, {Express} from 'express';
import { greetUser, listColors, udpateColorCount } from './controllers/UserController';

const PORT = process.env.PORT;
const app: Express = express();
app.use(express.json());


app.get("/users", greetUser);
app.get("/colors", listColors);
app.post("/colors", udpateColorCount);

app.listen(PORT, () => {
    console.log(`Server listening on  http://localhost:${PORT}`);
});

console.log(".....");