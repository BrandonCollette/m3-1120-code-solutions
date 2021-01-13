/* eslint-disable no-unused-vars */
function chunk(array, size){
    const newArr = [];
    let subArr = [];
    for(let i = 0;i<array.length;i++){
        if(subArr.length<size){
            subArr.push(array[i]);
            if(subArr.length===size){
                newArr.push(subArr);
                subArr=[];
            }
        }
    }
    if(subArr.length>0) {
        newArr.push(subArr);
    }
    return newArr;
}