/* eslint-disable no-unused-vars */
function isLowerCased(word){
    for(let i = 0;i<word.length;i++){
        if(word[i]===word[i].toLowerCase()){
            if(i===word.length-1){
                return true;
            }
        }
        else{
            return false;
        }
    }
}