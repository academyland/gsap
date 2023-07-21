gsap.registerEffect({
  name:"imageEffect",
  effect:(targets,config)=>{
    return gsap.to(targets,{y:200,scale:1.1,rotate:'20deg',duration:config.duration})
  },
  defaults:{duration:2}
})
document.querySelector('#btn').addEventListener('click',()=>{
  gsap.effects.imageEffect(".img1",{duration:1})
  gsap.effects.imageEffect(".img2")
})

