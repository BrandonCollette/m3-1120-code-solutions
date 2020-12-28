/* eslint-disable no-unused-vars */
function initial(array){
    let newArr = [];

    for(let i = 0;i<array.length;i++){
        if(i<array.length - 1){
            newArr.push(array[i]);
        }
    }
    return newArr;
}