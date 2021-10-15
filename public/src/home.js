window.addEventListener("scroll", reveal)

function reveal(){
    var reveals = document.querySelectorAll(".fade-in");

    for (i=0; i<reveals.length; i++ ){

        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop < windowheight - revealPoint){
            reveals[i].classList.add("active")
        } else {
            reveals[i].classList.remove("active")
        }
    }
}

var press = document.querySelector(".click").onclick = comeOut

function comeOut(){
    var fulldiv = document.querySelector(".slide-in");
    var arrow = document.querySelector("i");

    if(fulldiv.classList.contains("active") === true){
        fulldiv.classList.remove("active");
        arrow.classList.remove("fa-arrow-right");
        arrow.classList.add("fa-arrow-left")

    } else {
        fulldiv.classList.add("active");
        arrow.classList.remove("fa-arrow-left");
        arrow.classList.add("fa-arrow-right")
    }
}

$(document).ready(function(){
    $(".counter").counterUp({
        delay: 40,
        time: 1500
    })
})


$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

  $(document).ready(function() {
    $('#autoWidthnew').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

 var submit = document.querySelector(".btn-secondary").onclick = click

  function click(){
     var flex = document.querySelector(".fix-box-head");

     flex.innerHTML = "Thank you for subscribing";
  }
