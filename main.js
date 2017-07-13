
// utlilty ajax function
//
function ajax(url, verb){
  var httpRequest;
  // document.getElementById("trigger").addEventListener('click', postRequest(url));
  if(verb == 'post'){
    postRequest(url);
  }
  if(verb == 'get'){
    getRequest(url);
  }

  function postRequest(url) {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      console.error('Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = logResponse;
    httpRequest.open('POST', url);
    httpRequest.send();
  }

  function getRequest(url) {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      console.error('Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = logResponse;
    httpRequest.open('GET', url);
    httpRequest.send();
  }

  function logResponse() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var response = httpRequest.responseText;
        console.log(response);
        var json = JSON.parse(response)
        if(json['onoff'] == 0){
          document.getElementById("status").textContent = "Ready, trigger off.";
        }
        if(json['onoff'] == 1) {
          document.getElementById("status").textContent = "Ready, trigger on."
        }
      } else {
        document.getElementById("status").textContent = "Offline. " + httpRequest.status;
        console.error('There was a problem with the request.', httpRequest.status);
      }
    }
  }
}

// Update UI to match light setup.
// open is bool
function updateUI(open){
  // show garage door images

  // show some indicator when signal is sending
}

// set the lights to defined colors
// call api
//
function sendPulse(msec){
  var token = "?access_token=" + getToken();
  var api   = "https://us.wio.seeed.io/v1/node/GroveRelayD0/onoff/";

  ajax(api+1+token, 'post')
  // upon success,
  // update UI to say relay is off
  document.getElementById("status").textContent = "Sending...";
  console.log("relay contact: " + api + 1 + token);


  setTimeout(function(){
    ajax(api+0+token, 'post');
    // upon success, wait $sec
    // update UI to say relay is sending
    document.getElementById("status").textContent = "Sent.";
    console.log("relay open: " + api + 0 + token);
  }, msec);

}

function checkStatus(){
  var token = "?access_token=" + getToken();
  var api   = "https://us.wio.seeed.io/v1/node/GroveRelayD0/onoff_status/";
  ajax(api+token, 'get');
}

// set the auth token in local storage
// allows me to come back and use easily and not post token outside here.
function setToken(){
  var token = document.getElementById("token").value;
  localStorage.setItem('token', token);
}

// gets the token from local storage, puts it in UI, returns to methods
//
function getToken(){
  var token = localStorage.getItem('token', token);
  if (token != ''){
    document.getElementById("token").value = token;
  }
  return token;
}
