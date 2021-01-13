/* eslint-disable no-unused-vars */
function reverse(array){
    let newArr = [];

    for(let i = array.length-1;i>-1;i--){
        newArr.push(array[i]);
    }
    return newArr;
}