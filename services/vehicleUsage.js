const mongoose = require('mongoose');
const Usage = mongoose.model('vehicleUsages');

module.exports = saveData = async data => {
  //   const {
  //     latitude,
  //     longtitude,
  //     fuelLevel,
  //     movementSpeed,
  //     tempCargoOne,
  //     tempCargoTwo,
  //     tempCargoThree,
  //     vehicleAngleXY,
  //     batteryMonitor,
  //     vehicleOnOff,
  //     isSignIn,
  //     dateAndTime,
  //     fuelFlow,
  //     OCOne,
  //     OCTwo,
  //     OCThree,
  //     OCFour,
  //     panicButton,
  //     shockSensor
  //   } = data;

  //   const driverId = data.dId;
  //   const vehicleId = data.vId;
  const accountId = '0000';
  const usage = new Usage({
    accountId: accountId,
    driverId: data.dId,
    vehicleId: data.vId,
    latitude: data.latitude,
    longtitude: data.longtitude,
    fuelLevel: data.fuelLevel,
    movementSpeed: data.movementSpeed,
    tempCargoOne: data.tempCargoOne,
    tempCargoTwo: data.tempCargoTwo,
    tempCargoThree: data.tempCargoThree,
    vehicleAngleXY: data.vehicleAngleXY,
    batteryMonitor: data.batteryMonitor,
    vehicleOnOff: data.vehicleOnOff,
    isSignIn: data.isSignIn,
    dateAndTime: data.dateAndTime,
    fuelFlow: data.fuelFlow,
    ocOne: data.ocOne,
    ocTwo: data.ocTwo,
    ocThree: data.ocThree,
    ocFour: data.ocFour,
    panicButton: data.panicButton,
    shockSensor: data.shockSensor
  });

  try {
    await usage.save();
    console.log(usage);
    console.log('Saved');
  } catch (err) {
    console.log(err);
  }
};
