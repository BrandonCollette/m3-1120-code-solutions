/* eslint-disable no-unused-vars */
function isVowel(character){
    const vowels = "aeiouAEIOU";
    for(let i = 0;i<vowels.length;i++){
        if(character===vowels[i]){
            return true;
        }
    }
    return false;
}