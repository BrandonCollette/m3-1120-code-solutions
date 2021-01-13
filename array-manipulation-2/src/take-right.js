/* eslint-disable no-unused-vars */
function takeRight(array, count){
    let newArr = [];
    for(let i = (array.length - count);i<array.length;i++){
        if(array[0]===undefined){
            return newArr;
        }
        newArr.push(array[i]);
    }
    return newArr;
}