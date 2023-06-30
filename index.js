document.querySelector('#btn').addEventListener('click',()=>{
   gsap.to('.square',{scale:0.1 ,stagger:{
        amount:0.2,
        from:'center',
        grid: 'auto',
        axis:'y'
   }
 })
})

