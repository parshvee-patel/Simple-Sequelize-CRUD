const express = require("express")
import bodyParser from 'body-parser';
const app = express();

import { userRouter } from './router/user';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(userRouter);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Sequelize application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


