const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/HandOver');
mongoose.connection
        .once('open', () => console.log('Connectou MongoDB') ) 
        .on('error', (error) => {
            console.warn('Warning', error);
        });

