var canvas=document.getElementById("canvas")
var ctx=canvas.getContext("2d")
var cor="black"
var width=screen.width
var newwidht=screen.width-100
var newheigth=screen.height-200
var lastx
var lasty
if(width<990){
    document.getElementById("canvas").width=newwidht
    document.getElementById("canvas").height=newheigth
}
function circulo(x,y){
    ctx.beginPath()
    ctx.strokeStyle=cor
    ctx.lineWidth=tamanho
    ctx.arc(x,y,100,0,2*Math.PI)
    ctx.stroke()
}
canvas.addEventListener("touchstart",mytouchstart)
function mytouchstart(e){
    cor=document.getElementById("cor").value
    tamanho=document.getElementById("numero").value
    mousex=e.touches[0].clientX-canvas.offsetLeft
    mousey=e.touches[0].clientY-canvas.offsetTop
    
    clicado=true
}
function limpar(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}
canvas.addEventListener("touchmove",mytouchmovie)
function mytouchmovie(e){
    mousex=e.touches[0].clientX-canvas.offsetLeft
    mousey=e.touches[0].clientY-canvas.offsetTop
    if(clicado){
        ctx.beginPath()
        ctx.moveTo(lastx,lasty)
        ctx.lineTo(mousex,mousey) 
        ctx.stroke()   
    
    }
    lastx=mousex
    lasty=mousey
}