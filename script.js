function createPixels(gridWidth){
    const container = document.querySelector('.flex-grid')
    let child = container.lastElementChild
    while(child){
        container.removeChild(child)
        child = container.lastElementChild
    }
    for (let grp =0; grp<gridWidth; grp++ ){
        console.log(grp)
        var row = document.createElement('div')
        row.setAttribute('class', "mainbox")
        const height = window.getComputedStyle(container).getPropertyValue('height')
        //const width = window.getComputedStyle(container).getPropertyValue('width')
        //console.log(Number(value.slice(0,value.length-2))/gridWidth)
        let setHeight = (Number(height.slice(0,height.length-2))/gridWidth).toString() + 'px'
        //let setWidth = (Number(width.slice(0,value.length-2))/gridWidth).toString() + 'px'
        row.style.setProperty('height',height)
        row.style.setProperty('width',setHeight)
        for (let idx=0;idx<gridWidth;idx++){
            var col = document.createElement('div')
            col.setAttribute('class', "box")       
            col.style.setProperty('height',setHeight) 
            col.style.setProperty('height',setHeight) 
            row.appendChild(col)
        }
        container.appendChild(row)
    }
    startListening()

}
//Add event Listener for hover event. Change color ofsquare when mouse enters the div 
//Need this to run after for loop
function startListening(){
    const pixels = document.querySelectorAll(".box")
    const btn = document.querySelector('.btn')
    
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover',(e)=>{
            colorChange(e)
        })
    })
    btn.addEventListener('click',newGrid)
}

function colorChange(e){
    e.target.style.background = 'black'
    
}


function newGrid(){
    let gridNum = prompt("Please Number of Squares Per Side")
    console.log(typeof gridNum)
    if (gridNum > 100){
        gridNum = prompt("Number can't be greater than 100")
        if (gridNum < 100){
            createPixels(gridNum)

        }
    }
    else{
        createPixels(gridNum)
    }
}

createPixels(4)

