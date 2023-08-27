import Express from 'express';
import * as path from 'path';
import { fileURLToPath } from 'url';

import { PORT } from './configs/configs.js';
import db from './database/db.js';

import championshipRoutes from './routes/championship.routes.js';
import locatinRoutes from './routes/location.routes.js';
import teamRoutes from './routes/team.routes.js';
import playerRoutes from './routes/player.routes.js';

//Ruta directorio actual.
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Database
try {
    await db.sync({ force: false });
} catch (error) {
    console.log(error);
}

//Instancia app.
const app = Express();

app.use('/api/v1', championshipRoutes);
app.use('/api/v1', locatinRoutes);
app.use('/api/v1', teamRoutes);
app.use('/api/v1', playerRoutes);

app.listen(PORT, () => console.log(`Server arriba puerto ${PORT}`));

