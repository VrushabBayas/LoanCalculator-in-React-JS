const express = require('express');
const app = express();

const port = process.env.PORT || 3001;

app.get('/loan/:amount/:years/:intrest/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  var n = req.params.years * 12;
  var intrestValue = req.params.intrest;
  var i = intrestValue / 100 / 12;
  var discountFactor = (Math.pow(1 + i, n) - 1) / (i * Math.pow(1 + i, n));
  var amount = req.params.amount;
  var payments = amount / discountFactor;
  var obj = {
    payments: payments
  };
  res.send(obj);
});

app.listen(port, () => {
  console.log(`listing on port ${port}`);
});
