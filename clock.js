let username = prompt("Adınız nedir?");
let info = document.querySelector("#myName");
info.innerHTML = `${username}`

function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var gunler = date.getDay();
  
    let gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
  
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
  
    var time = h + ":" + m + ":" + s + " " + gunler;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
  
    setTimeout(showTime, 1000);
  }
  showTime();

        