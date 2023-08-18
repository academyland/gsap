const draggableElement=document.getElementById("draggableElement")
const square=document.getElementById("square");

const getCenter=(element)=>{
  const bounds=element.getBoundingClientRect();
  const centerX=bounds.left+bounds.width/2
  const centerY=bounds.top+bounds.height/2
  return {centerX,centerY}
}
Draggable.create(draggableElement,{
  bounds:"body",
  onDragEnd:()=>{
    if(isElementInsideSquare(draggableElement,square)){
      const {centerX:squareCenterX,centerY:squareCenterY}=getCenter(square);
      const draggableBounds=draggableElement.getBoundingClientRect();
      const newX=squareCenterX-draggableBounds.width/2;
      const newY=squareCenterY-draggableBounds.height/2;
      gsap.to(draggableElement,{x:newX,y:newY,inset:0})
      // gsap.to(draggableElement,{x:squareCenterX,y:squareCenterY,inset:0})
    }
  }
})

function isElementInsideSquare(element,square){
  const {centerX:elementCenterX,centerY:elementCenterY}=getCenter(element)
  const squareBounds=square.getBoundingClientRect();
  return (
    elementCenterX>=squareBounds.left&&
    elementCenterX<=squareBounds.right&&
    elementCenterY>= squareBounds.top&&
    elementCenterY<=squareBounds.bottom
  );
}