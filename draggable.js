Draggable.create(".img1",{
    type:"x,y",
    bounds:{width:600,height:600,top:0,left:0},
    edgeResistance:1,
    lockAxis:true,
    onClick(){
        console.log("click")
    },
    onPress(){
        console.log("press")
    },
    onDragStart(){
        console.log("drag start")
    },
    onDrag(){
        console.log("drag")
    },
    onDragEnd(){
        console.log('drag end')
    },
    onRelease(){
        console.log("release")
    },
    onLockAxis(){
        console.log("lock axis")
    },
    minimumMovement:30
})