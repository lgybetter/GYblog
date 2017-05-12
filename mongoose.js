import mongoose from 'mongoose'
import nconf from 'nconf'
mongoose.connect(nconf.get('mongodb'))

import './models/comment'
import './models/post'
import './models/tag'
import './models/user'