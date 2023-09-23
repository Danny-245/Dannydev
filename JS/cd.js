    const countDown = () => {
    const countDate = new Date("November 24, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hour = minutes * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minutes);
    const textSecond = Math.floor((gap % minutes) / seconds);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minutes").innerText = textMinute;
    document.querySelector(".seconds").innerText = textSecond;
    };
    setInterval(countDown, 1000);

    function openBtn() {
    document.getElementById("navbar").style.width = "210px";
    document.getElementById("navbar").style.padding = "20px";
    }
    function closeBtn() {
    document.getElementById("navbar").style.width = "0";
    document.getElementById("navbar").style.padding = "0";
    }

    function myFunction() {
    document.getElementById("dropdown-contents").classList.toggle("show");
    }

    var today = new Date();
    var curHrs = today.getHours();

    if (curHrs >= 0 && curHrs < 6) {
    document.getElementById("greetings").innerText = "Aren't you sleeping 🙄";
    } else if (curHrs >= 6 && curHrs <= 12) {
    document.getElementById("greetings").innerText = "Good morning From Daniel 🤗";
    } else if (curHrs >= 12 && curHrs < 15) {
    document.getElementById("greetings").innerText = "Good afternoon From Daniel 🤗";
    } else {
    document.getElementById("greetings").innerText = "Good evening From Daniel 🤗";
    }

    const popup = document.querySelector("#modal-container");
    const disMis = document.querySelector(".btn-close");

    window.addEventListener("load", showPopup());
    function showPopup() {
    const myTime = 3;
    var i = 0;

    const timer = setInterval(function () {
        i++;
        if (i == myTime) {
        clearInterval(timer);
        popup.classList.add("show");
        }
        console.log(i);
    }, 1000);
    }

    disMis.addEventListener("click", function () {
    popup.style.display = "none";
    });

    window.addEventListener("click", function (e) {
    if (e.target === popup) {
        popup.style.display = "none";
    }
    });

    /* var setout = setInterval(function() {
        document.getElementById('modal-container').style.display = "block";
    }, 3000) 
    */
