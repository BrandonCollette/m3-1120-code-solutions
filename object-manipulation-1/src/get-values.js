/* eslint-disable no-unused-vars */
function getValues(object){
    let x;
    let newArr = [];
    for(x in object){
        newArr.push(object[x]);
    }
    return newArr;
}