function myFunction() {
document.getElementById("graphics").style.display = 'block';
document.getElementById("graphicCont").style.border = '3px solid yellow';
document.getElementById("animationsCont").style.border = '0';
document.getElementById("animations").style.display = 'none';
}

function myFunction2() {
document.getElementById("animations").style.display = 'block';
document.getElementById("animationsCont").style.border = '3px solid yellow';
document.getElementById("graphicCont").style.border = '0';
document.getElementById("graphics").style.display = 'none';

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


