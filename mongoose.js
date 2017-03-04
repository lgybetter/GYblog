const mongoose = require('mongoose');
const nconf = require('nconf');
mongoose.connect(nconf.get('mongodb'));

require('./models/comments');
require('./models/posts');
require('./models/tags');
require('./models/users');