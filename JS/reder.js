var statusInterval = setInterval(function() {
    if(navigator.onLine) {
        document.getElementById('status').innerText = 'Online 😀';
    }else {
        document.getElementById('status').innerText = 'You are offline 😴';
    }
}, 1000)

function validate() {
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;

    if(password === cpassword && password !== '') {
        document.getElementById('error').innerText = 'Password matches';
    }
    else if (password || cpassword === '') {
        document.getElementById('error').innerText = 'Password does not matches';
    }
    else {
        document.getElementById('error').innerText = 'Password does not matches';
    }
}

//toggle function

function toggle() {
    var email = document.getElementById('email').value;
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var p = document.getElementById('password').value;
    var c = document.getElementById('cpassword').value;

    if(email && fname && lname && p && c !== '' && c === p) {
        var mytimeOut = setTimeout(function(){
            var popUp = document.getElementById('popup');
            popUp.classList.toggle('active');
            
            var blur = document.getElementById('blur');
            blur.classList.toggle("active");
        }, 2000);


        setTimeout(function submitForm() {
            document.getElementById('form').submit();
            window.location.href = 'thanks.html';
        }, 10000);

        document.getElementById('submit-btn').disabled = true;

        body.style.overFlow = 'hidden';
    } 
}