const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const database = require('./database');
database.connect();

const app = require('./app');

const port = process.env.PORT;
app.listen(port, () => console.log(`Server listening on port ${port}`));