var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");
var buttonprojects = document.getElementById("projects");
var buttonexperience = document.getElementById("experience");
var buttonmoreabout = document.getElementById("moreabout");

buttonprojects.addEventListener("click", function(){alert("Sorry, Projects page is still in development!")})
buttonexperience.addEventListener("click", function(){alert("Sorry, Experience page is still in development!")})
buttonmoreabout.addEventListener("click", function(){alert("Sorry, About Me page is still in development!")})

hamburger.addEventListener("click", function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
})
