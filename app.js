const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors'); 
const router = require('./router/rutas.js');

const corsOptions = {
  origin: ['http://localhost:3000'],
  optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/', router);

const PORT = 3001;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
