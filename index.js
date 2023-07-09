const tween=gsap.to(".img2",{y:100,paused:true,onReverseComplete:()=>{
     alert("reversed")
}})
document.querySelector('#btn').addEventListener('click',()=>{
     tween.duration(5);
   tween.play();
   setTimeout(()=>{
     tween.pause();
   },1500)
   setTimeout(()=>{
     tween.kill();
     tween.resume().then(()=>{
          tween.timeScale(10).reverse();
     });
   },4000)
})

