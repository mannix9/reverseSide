var luckyNumbers = [4, 9, 5, 1, 8]
var newLuckyNumbers = luckyNumbers.map(myFunction)
function myFunction(num){
    return num * 3
}
console.log(newLuckyNumbers)