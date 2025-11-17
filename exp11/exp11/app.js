const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/register', (req, res) => {
  console.log(req.body);
  res.send("Registration successful!");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));