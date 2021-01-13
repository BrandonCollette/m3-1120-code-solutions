/* eslint-disable no-unused-vars */
function take(array,count){
    let newArr = [];
    for(let i = 0;i<count;i++){
        if(array[i]===undefined){
            newArr = [];
            return newArr
        }
        newArr.push(array[i]);
    }
    return newArr;
}