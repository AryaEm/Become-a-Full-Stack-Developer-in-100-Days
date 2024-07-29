const x = document.getElementById('result');

function getCoordinate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred."
        break;
    }
  }


  function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
// var c = document.getElementById('canvas');
// var ctx = c.getContext ('2d');
// ctx.beginPath ();
// ctx.arc(95, 50, 40, 0, 2 * Math.PI);
// ctx.stroke();

// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");

// var grd = ctx.createRadialGradient(75,50,5,90,60,100);
// grd.addColorStop(0,"cadetblue");
// grd.addColorStop(1,"white");

// ctx.fillStyle = grd;
// ctx.fillRect(10,10,200,80);
