/* eslint-disable no-unused-vars */
function compact(array){
    let newArr = [];
    for(let i = 0;i<array.length;i++){
        if(!array[i]){}
        else{
            newArr.push(array[i]);
        }
    }
    return newArr;
}