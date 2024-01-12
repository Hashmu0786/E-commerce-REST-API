const express = require("express");
port = 3000;
const bodyParser = require("body-parser");
const db = require("./Config/mongoose");
const productRoutes = require('./routes/products');
const searchRoutes = require('./routes/search');


const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', productRoutes);
app.use('/', searchRoutes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
