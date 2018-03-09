var clicks = 0;
var signInSuccess = false;
var signInName = "";



function onClicsk() {
		if (clicks === 0) {
		document.getElementById("demo").innerHTML = "go back to your family"; 
		clicks += 1;
		} else if (clicks === 1) {
		document.getElementById("demo").innerHTML = "no matter how much you try you will not find love";
		clicks +=1
		} else if (clicks === 2) {
		document.getElementById("demo").innerHTML = "god..... does not exist";
		clicks +=1
		} else if (clicks === 3) {
		document.getElementById("demo").innerHTML = "<img src=\"poo.jpg\">"; //backslash is for the special onez
		clicks +=1
		} else if (clicks === 4) {
		window.location.href = "sign-in.html";
		} 
}

function myFunction() {
document.getElementById("illustrations").style.display = 'block';
document.getElementById("animations").style.display = 'none';
document.getElementById("accreditron").style.display = 'none';
document.getElementById("beca").style.display = 'none';
document.getElementById("university").style.display = 'none';
}

function myFunction2() {
document.getElementById("animations").style.display = 'block';
document.getElementById("illustrations").style.display = 'none';
document.getElementById("accreditron").style.display = 'none';
document.getElementById("beca").style.display = 'none';
document.getElementById("university").style.display = 'none';
}

function myFunction3() {
document.getElementById("accreditron").style.display = 'block';
document.getElementById("illustrations").style.display = 'none';
document.getElementById("animations").style.display = 'none';
document.getElementById("beca").style.display = 'none';
document.getElementById("university").style.display = 'none';
}

function myFunction4() {
document.getElementById("beca").style.display = 'block';
document.getElementById("illustrations").style.display = 'none';
document.getElementById("animations").style.display = 'none';
document.getElementById("accreditron").style.display = 'none';
document.getElementById("university").style.display = 'none';
}

function myFunction5() {
document.getElementById("university").style.display = 'block';
document.getElementById("illustrations").style.display = 'none';
document.getElementById("animations").style.display = 'none';
document.getElementById("accreditron").style.display = 'none';
document.getElementById("beca").style.display = 'none';
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}