// Iframe that sends the click event
// document.querySelector('h1').addEventListener('click', function() {
//       // Send a message to the other iframe with the ID of the element to click
//       console.log("yaya it's main frame")
//       window.frames['second-iframe'].postMessage(document.getElementById('softland-btn').id, '*');
//     });
    
//     // Iframe that receives the click event
//     window.addEventListener('message', function(event) {
//       // Get a reference to the element to click
//       var element = document.getElementById(event.data);
    
//       // Click the element
//       element.click();
//     });

const sendMessageBtn = document.querySelector("#send-message-btn");

function sendMessage() {
    const message = "guide-id";
    const iframe = document.querySelector('#second-iframe');
    iframe.contentWindow.postMessage(message, "*");
}

sendMessageBtn.addEventListener('click', sendMessage);