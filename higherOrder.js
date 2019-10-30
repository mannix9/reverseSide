function codeNation(){
    console.log("Hello code nation")

}
function higherOrder(codeNation){
    for(i=0; i < 5; i++){
        codeNation()
    }
}
(higherOrder(codeNation))