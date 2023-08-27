import Express from 'express';
import { PORT } from './configs/configs.js';

const app = Express();

app.listen(PORT,()=>console.log(`Server arriba puerto ${PORT}`));

