document.getElementById("p_change").addEventListener("click", function(e){
    alert("You clicked on the text!")
    document.getElementById("p_change").innerHTML = "The text is changed!";
    document.getElementById("p_change").style.backgroundColor = "#8a8a8a";
})

document.getElementById("image").addEventListener("mouseover", function(b){
    document.getElementById("image").src = "/img/DSC_0085.JPG";
    document.getElementById("image").style.cssText = "position: relative; left: 1000px; width: 500px;"
})

document.getElementById("image").addEventListener("click", function(b){
    document.getElementById("image").src = "/img/DSC_0053.JPG";
    document.getElementById("image").style.cssText = "position: relative; left: 0px; width: 500px;"
})