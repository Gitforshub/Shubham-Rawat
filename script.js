

function firstpage() {
    var tl = gsap.timeline();
  
    tl.from("#nav", {
      y: "-10",
      opacity: 0,
      duration: 1.2,
      ease: Expo.easeInOut,
    }).to(".bounding-elem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: 3,
      stagger: 0.2,
    });
    tl.from("#home-footer", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
  }
  firstpage();

  document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });



  function CircleMouseFollower() {
    window.addEventListener("mousemove", function (dets) {
      this.document.querySelector(
        "#circle"
      ).style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
    });
  }
  document.getElementById("main").addEventListener("scroll", function () {});
  CircleMouseFollower();
  
  document.querySelectorAll(".element").forEach(function (element) {
    var rotate = 0;
    var differ = 0;
    element.addEventListener("mousemove", function (dets) {
      var difference = dets.clientY - element.getBoundingClientRect().top;
      differ = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(element.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: difference-160,
        left: dets.clientX-250,
        rotate: gsap.utils.clamp(-20, 20, differ * 0.5),
      });
    });
  
    element.addEventListener("mouseleave", function (dets) {
      gsap.to(element.querySelector("img"), {
        opacity: 0,
        ease: Power3,
      });
    });
    
  });

  function loaderAnimation(){
    var loader = document.querySelector("#loader")
    setTimeout(function(){
         loader.style.top = "-100%"
    },4200)
    
  }
  
  loaderAnimation()


  