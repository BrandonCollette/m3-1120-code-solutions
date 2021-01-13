/* eslint-disable no-unused-vars */
function tail(array){
    let newArr = [];
    for(var x = 0;x<array.length;x++){
        if(x>0){
            newArr.push(array[x]);
        }
    }
    return newArr;
}