const express = require('express');
const compression = require('compression');

const app = express();

app.use(compression());

app.use(express.static(`${__dirname}/build`));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`);
})

app.listen(process.env.PORT || 8081);
