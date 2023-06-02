// gsap.to(".img2",{y:100,scale:1.2});
document.querySelector('#btn').addEventListener('click',()=>{
    // gsap.from(".img1",{autoAlpha:0,y:-20,duration:4})
    gsap.fromTo(".img1",{autoAlpha:0,y:-20},{autoAlpha:1,y:0})
})