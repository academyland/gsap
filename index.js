document.querySelector('#btn').addEventListener('click',()=>{
 gsap.to(".img1",{y:'10rem',repeat:2,
     onStart:()=>{
          console.log("onStart")
     },
     onComplete:()=>{
          console.log("onComplete")
     },
     onUpdate:()=>{
          console.log("onUpdate")
     },
     onRepeat:()=>{
          console.log("onRepeat")
     }
})
})

