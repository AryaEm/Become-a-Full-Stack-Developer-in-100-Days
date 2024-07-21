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