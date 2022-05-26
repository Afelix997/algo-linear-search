const arrayToSearchThrough = [];
for (let i = 1; i <= 1000; i++) {
    arrayToSearchThrough.push(i);
}

exports.linearSearch = function(valueToFind, arrayToSearchThrough) {
    let answer = undefined
    if (arrayToSearchThrough.indexOf(valueToFind) !== -1) {
        for (let i = 0; i < arrayToSearchThrough.length; i++) {  
            if (arrayToSearchThrough[i]== valueToFind){
                answer = i 
              break
            }} return answer;
    }}
    
exports.linearSearchGlobal= function(valueToFind, arrayToSearchThrough){
let answer = []
if (arrayToSearchThrough.indexOf(valueToFind) !== -1) {
    for (let i = 0; i < arrayToSearchThrough.length; i++) {  
        if (arrayToSearchThrough[i]== valueToFind){
            answer.push(i)
        }} return answer;
    }else {return null}}