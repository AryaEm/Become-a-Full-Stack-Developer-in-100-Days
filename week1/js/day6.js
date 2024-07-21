function Hide() {
    var x = document.getElementsByClassName("city");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
  }

  function Show() {
    var x = document.getElementsByClassName("city");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "block";
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var x = document.getElementsByClassName("city");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
  });

  function Change() {
    var element = document.getElementById("changeText");
    if (element.innerHTML == "Hello World!") {
        element.innerHTML = "Goodbye Universe!";
    } else {
        element.innerHTML = "Hello World!";
    }
  }       

  document.getElementById("text1").innerHTML = "My First JavaScript";

  function changesStyle() {
    document.getElementById("text2").style.fontSize = "20px";
    document.getElementById("text2").style.color = "white";
    document.getElementById("text2").style.backgroundColor = "black";
    document.getElementById("text2").style.padding = "10px";
    document.getElementById("text2").style.textAlign = "center";
    document.getElementById("text2").style.borderRadius = "10px";
    document.getElementById("text2").style.cursor = "pointer";
    document.getElementById("text2").style.margin = "10px";
  }

  function image(sw) {
    var element = document.getElementById("myImage");
    if (sw == 0) {
        element.style.backgroundImage = "url('/week1/assets/yor.jpg')";
    } else if (sw == 1){
        element.style.backgroundImage = "url('/week1/assets/bg_Vestia-Zeta_01.png')";
    }
    // element.style.backgroundSize = "cover";
  }