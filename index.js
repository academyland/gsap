// gsap.to(".img2",{y:100,scale:1.2});
document.querySelector('#btn').addEventListener('click',()=>{
    gsap.from(".img1",{autoAlpha:0,y:-20,duration:4})
})