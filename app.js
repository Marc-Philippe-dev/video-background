// Elements targeting
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

//EventListiner adding

btn.addEventListener("click", function(){
    if(btn.classList.contains("slide")){
        btn.classList.remove("slide");
        video.play();
    }
    else{
        btn.classList.add("slide");
        video.pause();
    }

});

// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});