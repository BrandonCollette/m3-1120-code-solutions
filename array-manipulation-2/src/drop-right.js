/* eslint-disable no-unused-vars */
function dropRight(array, count){
    const newArr = [];
    for(let i = 0;i<array.length;i++){
        if(i<array.length-count){
            newArr.push(array[i]);
        }
    }
    return newArr;
}