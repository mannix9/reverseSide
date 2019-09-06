alert("Welcome to the Fruit Machine")
document.getElementById("r3").addEventListener("click",spin)

function spin(){
    alert("You are spinning the wheels")
    spinReel("b")
    spinReel("r1")
    spinReel("r2")
}
function spinReel(reel){
    let i = Math.floor(Math.random()*3)
    if(i == 0){
        document.getElementById(reel).src = "images/pear.jpg"
    }
    if(i == 1){
        document.getElementById(reel).src = "images/pear2.jpg"

    }if(i == 2){
        document.getElementById(reel).src = "images/pear3.jpg"
    }
    if ("b" == "r1" == r2){
        return "Well done"
    }

}