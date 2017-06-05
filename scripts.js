window.onload = function myFunction() {



    function insertiFrame(url, parent, sibling) {
      var x = document.createElement("IFRAME");
      x.setAttribute("src", url);
      x.style.display = "block"; // removes gap
      x.style.zIndex = "-1";
      x.style.width = "100%";
      var sibHeight = document.getElementById(sibling).clientHeight.toString();
      x.style.height = sibHeight + "px";
      x.style.marginTop = "-" + sibHeight + "px";
      x.style.border = "none";
      document.getElementById(parent).appendChild(x);
    }

    //insert star field
    insertiFrame('stars/stars.html', 'star-field', 'module');
    insertiFrame('stars/stars.html', 'second-star-field', 'third-module');

}
