function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()
var lunchimg = document.querySelector("#lunchimg")
var dinnerimg = document.querySelector("#dinnerimg")
var drinksimg = document.querySelector("drinksimg")
var lunch = document.querySelector("#lunch5")
var dinner = document.querySelector("#dinner5")
var drinks = document.querySelector("#drinks5")

lunch.addEventListener("mouseenter", function(){
  lunchimg.style.opacity = '1',
  lunchimg.style.scale = '1'
})
lunch.addEventListener("mouseleave", function(){
  lunchimg.style.opacity = '0',
  lunchimg.style.scale = '0'
})
lunch.addEventListener("mousemove", function(dets){
  lunchimg.style.top = dets.y+"px"
  lunchimg.style.left = dets.x+"px"
})




var tl = gsap.timeline();

tl.from("#page1cont img",{
  scale:1.5,
  duration:2,
  // delay:1.2,
})
// tl.to("#page2-right img",{
//   scale:2,
//   duration:2,
//   scrollTrigger:{
//     trigger:("#page2-right img"),
//     scroller:("#main"),
//     markers:true,
//     start:'0% 50%',
//     end:'30% 60%',
// }})




