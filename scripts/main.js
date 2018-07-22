const renderHome = require('./render/render-home')
const renderVideo = require('./render/render-video')

renderHome()

const allAcceptButtons = document.querySelectorAll('.buttons-acc')
const allDeclineButtons = document.querySelectorAll('.buttons-decline')
const AgoraRTC = require('agora-rtc-sdk')
const appId = require('./appID')

const acceptBtns = Array.from(allAcceptButtons)
const declineBtns = Array.from(allDeclineButtons)

// add event listener to accept buttons
acceptBtns.map(el => {
  el.addEventListener('click', join)
})
// add event listeners to decline buttons
declineBtns.map(el => {
  el.addEventListener('click', function() {
    // console.log(AgoraRTC)
  })
})

if (!AgoraRTC.checkSystemRequirements()) {
  alert("Your browser does not support WebRTC!");
}

let client, localStream, camera, microphone;

function join() {
	const channel_key = null;
	const channelVal = 1000;
  client = AgoraRTC.createClient({
    mode: 'interop' //What is this mode?
  });
  console.log(client)
  client.init(appId, function() {
    console.log("AgoraRTC client initialized");
		client.join(channel_key, channelVal, null, function(uid){
			console.log("User " + uid + " join channel successfully");
			
		})
  })
}
