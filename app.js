const fs = require("fs");
const data = require("./processedLearners.json");
const express = require("express");
const cors = require('cors')

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/api/fetch-data", function (req, res) {
  res.status(200).json(data);
});
app.get("/api/fetch-data/:id", function (req, res) {
  const { id } = req.params;
  //data.map(value);
  if (id >= 0 && id <= data.length) {
    res.json(data[id]);
  } else {
    res.json({
      success: false,
      msg: 'Invalid ID'
    })
  }
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
