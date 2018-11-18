

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ncrm').then(() => console.log('Connected to MongoDB')).catch( error => console.log(error));

