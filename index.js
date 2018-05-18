const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
//Models
require('./models/VehicleUsage');
//Services
require('./services/mqttClient');

mongoose.connect(keys.mongoURI);

const app = express();


require('./routes/usageRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});