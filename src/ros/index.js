// import './RosApi'

import ROSLIB from 'roslib';

var ros = new ROSLIB.Ros({
    url : 'ws://localhost:9090'
});

// status
ros.on('connection', function() {
    console.log("Connected");
});

ros.on('error', function(error) {
    console.log("Error");
});

ros.on('close', function() {
    console.log("Closed");
});

// subscriber
var pressure = new ROSLIB.Topic({
    ros : ros,
    name : '/pressure',
    messageType : 'std_msgs/Float32'
});
pressure.subscribe(function(m) {
    document.getElementById("prs").innerHTML = m.data.toString();
});

var yaw = new ROSLIB.Topic({
    ros : ros,
    name : '/yaw',
    messageType : 'std_msgs/Float32'
});
yaw.subscribe(function(m) {
    document.getElementById("yaw").innerHTML = m.data.toString();
});

var pitch = new ROSLIB.Topic({
    ros : ros,
    name : '/pitch',
    messageType : 'std_msgs/Float32'
});
pitch.subscribe(function(m) {
    document.getElementById("pitch").innerHTML = m.data.toString();
});

var roll = new ROSLIB.Topic({
    ros : ros,
    name : '/roll',
    messageType : 'std_msgs/Float32'
});
roll.subscribe(function(m) {
    document.getElementById("roll").innerHTML = m.data.toString();
});

const RosApi = () => {
    
}

export default RosApi;