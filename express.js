const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const nconf = require('nconf');
const RouterIndex = require('./routers');
const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
const routerIndex = new RouterIndex(express);
app.use('/', routerIndex.router());
app.use('/api', routerIndex.commonRouter());
app.use('/api/auth', routerIndex.authRouter());

app.listen(nconf.get('port') || 3000, nconf.get('host'), () => {
  console.log(`Server running at http://${nconf.get('host')}:${nconf.get('port') || 3000}`);
});

