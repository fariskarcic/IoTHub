const mqtt = require('mqtt');
const keys = require('../config/keys');
const saveData = require('../services/vehicleUsage');



const mqttClient = mqtt.connect('mqtt://m21.cloudmqtt.com:13195', {
  clean: false,
  clientId: 'Server-listener',
  username: keys.mqttUsername,
  password: keys.mqttPassword,
  protocolId: 'MQTT',
  protocolVersion: 4,
  will: {
    topic: '/logs',
    payload: 'IoT hub crashed',
    qos: 2
  }
});

mqttClient.on('connect', connack => {
  if (connack.sessionPresent) {
    console.log('Already subbed, no subbing necessary');
  } else {
    console.log('First session! Subbing.');
    mqttClient.subscribe('/iot', { qos: 2 });
  }
});

mqttClient.on('message', (topic, message) => {

  saveData(JSON.parse(message.toString()));
});

module.exports = mqttClient;
