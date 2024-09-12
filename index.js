var img1 = Math.floor(Math.random()*6+1)
var img2 = Math.floor(Math.random()*6+1)

document.getElementsByClassName("img1")[0].setAttribute("src","./dice"+img1+".png") 
document.getElementsByClassName("img2")[0].setAttribute("src","./dice"+img2+".png")

if (img1>img2){
    document.querySelector("h1").textContent="🥇 Player 1 Won!"
}else if(img1<img2){
    document.querySelector("h1").textContent="Player 2 Won! 🥇"
}else if(img1==img2){
    document.querySelector("h1").textContent="It's a Draw"
}else{
    document.querySelector("h1").textContent="Refresh Me"
}
