
function scrBy(x, y) {
    window.scrollBy({
      left: x, top: y,
      behavior: "smooth"
    });
  }

  function scrInto(id) {
    document.querySelector(id).scrollIntoView({
      behavior: "smooth"
    });
  }

  var t4 = gsap.timeline({
    scrollTrigger:{
        trigger:".page3",
        // markers:true,
        start:"10% 90%",
        end:"10% 40%",
        scrub:2
    }
})


t4.from(".page3",{
    duration:1,
    opacity:0
})

t4.from(".skills-container",{
    duration:2,
    opacity:0,
    delay:2,
    top:"100%"
})



