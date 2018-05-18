const mongoose = require('mongoose');
const { Schema } = mongoose;

const vehicleUsageSchema = new Schema({
  accountId: String,
  driverId: String,
  vehicleId: String,
  latitude: Number,
  longtitude: Number, //
  fuelLevel: Number,
  movementSpeed: Number,
  tempCargoOne: Number,
  tempCargoTwo: Number,
  tempCargoThree: Number,
  vehicleAngleXY: Number,
  batteryMonitor: Number,
  vehicleOnOff: Boolean,
  isSignIn: Boolean,
  dateAndTime: Date,
  fuelFlow: Boolean,
  ocOne: Boolean, //
  ocTwo: Boolean, //
  ocThree: Boolean, //
  ocFour: Boolean, //
  panicButton: Boolean,
  shockSensor: Boolean
});

mongoose.model('vehicleUsages', vehicleUsageSchema);

/*

{"dId":"1111410172","vId":"12345","latitude":43.85405,"longtitude":18.3724,"fuelLevel":0,"movementSpeed":0.01852,"tempCargoOne":0,"tempCargoTwo":0,"tempCargoThree":0,"vehicleAngleXY":0,"batteryMonitor":5,"vehicleOnOff":1,"isSignIn":0,"dateAndTime":"2018-05-11T10:45:53.00","fuelFlow":0,"ocOne":1,"ocTwo":1,"ocThree":1,"ocFour":1,"panicButton":0,"shockSensor":0}

*/