function myFunction() {
document.getElementById("graphics").style.display = 'block';
document.getElementById("animations").style.display = 'none';
document.getElementById("accreditron").style.display = 'none';
document.getElementById("beca").style.display = 'none';
}

function myFunction2() {
document.getElementById("animations").style.display = 'block';
document.getElementById("graphics").style.display = 'none';
document.getElementById("accreditron").style.display = 'none';
document.getElementById("beca").style.display = 'none';
}

function myFunction3() {
document.getElementById("accreditron").style.display = 'block';
document.getElementById("graphics").style.display = 'none';
document.getElementById("animations").style.display = 'none';
document.getElementById("beca").style.display = 'none';
}

function myFunction4() {
document.getElementById("beca").style.display = 'block';
document.getElementById("graphics").style.display = 'none';
document.getElementById("animations").style.display = 'none';
document.getElementById("accreditron").style.display = 'none';
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
