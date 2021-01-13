/* eslint-disable no-unused-vars */
function getWords(string){
    const newArr = [];
    let newWord = "";
    for(let i = 0;i<string.length;i++){
        if(string[i]===" "){
            newArr.push(newWord);
            newWord = "";
        }
        else if(i===string.length-1){
            newWord+=string[i];
            newArr.push(newWord);
        }
        else {
            newWord += string[i];
        }
    }
    return newArr;
}