/* eslint-disable no-unused-vars */
function capitalize(string){
    let restLetter = "";
    const firstLetter = string[0].toUpperCase();
    for(let i = 1;i<string.length;i++){
        restLetter+=string[i].toLowerCase();
    }
    return firstLetter+restLetter;
}