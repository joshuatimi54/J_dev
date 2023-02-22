window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".navbar").style.backgroundColor = "rgb(120, 204, 109, 0.8)";
    document.querySelector(".navbar").style.transition = "1s";
      document.querySelector(".navbar").style.position = "fixed";
      document.querySelector("#topbar").style.marginTop = "-80px";
      document.querySelector("#topbar").style.padding= "0.42rem";
      document.querySelector("#topbar").style.borderRadius = "15px";
  } else {
      document.querySelector("#topbar").style = "initial";
      document.querySelector(".navbar").style.transition = "1s";
    document.querySelector(".navbar").style.backgroundColor = "rgb(255,255,255,0.4)";
  };
};