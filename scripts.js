window.onload = function myFunction() {
    //insert star field
    var x = document.createElement("IFRAME");
    x.setAttribute("src", "stars/stars.html");
    x.style.display = "block"; // removes gap
    x.style.zIndex = "-1";
    x.style.width = "100%";
    var elmHeight = document.getElementById('module').clientHeight.toString();
    x.style.height = elmHeight + "px";
    x.style.marginTop = "-" + elmHeight + "px";
    x.style.border = "none";
    document.getElementById('star-field').appendChild(x);
}
