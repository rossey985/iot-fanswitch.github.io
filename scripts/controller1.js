var client;
var topic = "ming2/fan/status";
$('#btn-Off').on('click',function(){
  console.log('connect button click...')
  client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")
  client.on("connect",function(){
    console.log("succeed...")
    $("#status").text("The fan is currently turned off.")
    let payLoad ="Payload: Turned off " +  moment().format('MMMM Do YYYY, h:mm:ss a')
   // console.log("Received Topic:" + topic + " Payload: Turned Off " + moment().format('MMMM Do YYYY, h:mm:ss a')) 
    client.publish(topic,payLoad);
  });
});

$('#btn-one').on('click',function(){
  console.log('connect button click...')
  client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")
  client.on("connect",function(){
    console.log("succeed...")
    $("#status").text("The fan is currently turned on to 1.")
    let payLoad ="Payload: Turned on 1 " +  moment().format('MMMM Do YYYY, h:mm:ss a')
    //console.log("Received Topic:" + topic + " Payload: Turned to 1 " + moment().format('MMMM Do YYYY, h:mm:ss a')) 
    client.publish(topic,payLoad);
  });
});
$('#btn-two').on('click',function(){
  console.log('connect button click...')
  client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")
  client.on("connect",function(){
    console.log("succeed...")
    $("#status").text("The fan is currently turned on to 2.")
    let payLoad ="Payload: Turned on 2 " +  moment().format('MMMM Do YYYY, h:mm:ss a')
    //console.log("Received Topic:" + topic + " Payload: Turned on 2 " + moment().format('MMMM Do YYYY, h:mm:ss a')) 
    client.publish(topic,payLoad);
  });
});
$('#btn-three').on('click',function(){
  console.log('connect button click...')
  client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")
  client.on("connect",function(){
    console.log("succeed...")
    $("#status").text("The fan is currently turned on to 3.")
    let payLoad ="Payload: Turned on 3 " +  moment().format('MMMM Do YYYY, h:mm:ss a')
    //console.log("Received Topic:" + topic + " Payload: Turned on 3 " + moment().format('MMMM Do YYYY, h:mm:ss a')) 
    client.publish(topic,payLoad);
  });
});

// basic functionalities
// var client;

// var btnPublish = $("#btn-publish")

// $('#btn-connect').on('click', function () {
//   // connect
//   console.log("connect button clicked..")
//   client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")
//   $("#connect-status").text("Connecting to wss://test.mosquitto.org:8081/mqt ....")
//   $("#connect-status").css("color", "orange")
//   $("#connect-status").css("font-weight", "bold")
//   client.on("connect", function () {
//     console.log("succ")
//     $("#connect-status").text("Connected Successfully!")
//     $("#connect-status").css("color", "green")
//     $("#connect-status").css("font-weight", "bold")
    
//   });

//   $(".btn-disconnect").click(function () {
//     client.end();
//     $("#connect-status").text("You Are Disonnected to the Broker!")
//     $("#connect-status").css("color", "red")
//   })

  
//   $("#btn-publish").click(function () {
//     var topic = $("#topic").val();
//     var message = $("#message").val();
//     if (topic == "" || message == "") {
//       alert("Requires Info!")
//     } else {
//       console.log("Published Topic: "+topic+ " Message: " + message)
//       client.publish(topic, message);
//       alert("Published Successfully!!")
//     }
//   })

//   $("#btn-subscribe").click(function () {
//     var topsub = $("#topic-sub").val();
//     if (topsub == "") {
//       alert("Requires Info")
//     } else {
//       console.log("Subcribed Topic: "+ topsub)
//       client.subscribe(topsub);
//       alert("Subscribed Successfully!!")
//     }
//   })
//   $("#btn-unsubscribe").click(function () {
//     var topsub = $("#topic-sub").val();
//     if (topsub == "") {
//       alert("Requires Topic")
//     } else {
//       client.unsubscribe(topsub);
//       alert("Unsubscribe Successfully")
//     }
//     $("#btn-unsubscribe").removeClass("alert-success")
//     $("#btn-unsubscribe").addClass("alert-secondary")
//   })
//   client.on("message", function (topic, payload) {
//     console.log("Recieved Topic: "+topic+"Payload: "+payload)
//     var row = $("<tr>")
//     $("<td>" ).text(topic).appendTo($(row))
//     $("<td>").text(payload).appendTo($(row))
//     $("<td>").text(moment().format('MMMM Do YYYY, h:mm:ss a')).appendTo($(row))
//     $("tbody").append($(row))
    
//   })
// })