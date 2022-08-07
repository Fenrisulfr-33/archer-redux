const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI)
.then(connection => {
    console.log(`Mongo Connected: ${connection.connection.host}`.cyan.underline);
})
.catch(error => {
    console.log(`Error: ${error}`);
})

mongoose.temtem = mongoose.createConnection(process.env.MONGO_TEMTEM_URI)

module.exports = mongoose;