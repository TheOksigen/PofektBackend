const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config()
app.use(express.json())
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).send({message: 'OK'});
})


const PORT = process.env.PORT
console.log(PORT);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})