for(i=1;i<=6;i++)
gsap.from(".img"+i,{
    autoAlpha:0,
    // y:-100,
    scale:0.6,
    duration:2,
    scrollTrigger:{
        trigger:".img"+i,
        markers:true,
        start:"top bottom"
    }
})