
// let isFixed=false;
// let animation;
// const selector="nav"
// const doFix=()=>{
//     if(!isFixed){
//         isFixed=true;
//         gsap.set(selector,{position:'fixed',right:0,left:0,top:0,y:"-100%",zIndex:20,opacity:0})
//         animation=gsap.to(selector,{
//             y:0,
//             opacity:1,
//             ease:"power4",
//             duration:0.2,
//             onReverseComplete:()=>{
//                 isFixed=false;
//                 gsap.set(selector,{clearProps:'all'})
//             }
//         }).timeScale(0.3)
//     }
// }
// const backToNormal=()=>{
//     if(isFixed){
//         animation.reverse();
//     }
// }
// window.addEventListener('scroll',()=>{
//     if (window.scrollY > 800) {
//         doFix()
//     } else {
//         backToNormal()
//     }
// },{passive:true})



let isFixed=false;
let animation;
const selector="nav"

ScrollTrigger.create({
    trigger:selector,
    // markers:true,
    start:"top+=800 top",
    onEnter:()=>{
        gsap.set(selector,{position:'fixed',right:0,left:0,top:0,y:"-100%",zIndex:20,opacity:0})
        animation=gsap.to(selector,{
            y:0,
            opacity:1,
            ease:"power4",
            duration:0.2,
            onReverseComplete:()=>{
                isFixed=false;
                gsap.set(selector,{clearProps:'all'})
            }
        }).timeScale(0.3)
    },
    onLeaveBack:()=>{
        animation?.timeScale(1)
        animation.reverse();
    }
})