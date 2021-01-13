/* eslint-disable no-unused-vars */
function isUpperCased(word){
    for(let i = 0;i<word.length;i++){
        if(word[i]===word[i].toUpperCase()){
            if(i===word.length-1){
                return true;
            }
        }
        else{
            return false;
        }
    }
}