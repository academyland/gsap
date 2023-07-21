const tl=gsap.timeline({
  defaults:{
    duration:1,
    ease:"back.out(1.7)"
  },
  repeat:-1,
  yoyo:true,
  paused:true
});
tl.to(".img1",{y:100,duration:2})
.to(".img2",{y:100,duration:2},'<')
.to(".img3",{y:100,duration:2,ease:'power4.out'},'-=1.5')
document.querySelector('#btn').addEventListener('click',()=>{
 tl.play();
})

