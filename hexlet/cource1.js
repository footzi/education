//Реализуйте фунцкию которая делает заглавной первую букву каждого слова в предложении.
// export default (str) => {
//     let result = '';
//     for (let i = 0; i < length(str); i += 1) {
//       const shouldBeBig = str[i] !== ' ' && (i === 0 || str[i - 1] === ' ');
//       result += shouldBeBig ? toUpperCase(str[i]) : str[i];
//     }
  
//     return result;
//   };
    //solution("  hello kitty")


const solution=(str)=>{
    let result="";
    for (let i=0; i<str.length;i++) {
        const shouldBeBig = str[i] !== ' ' && (i === 0 || str[i - 1] === ' ');
        result += shouldBeBig ? str[i].toUpperCase() : str[i];
        
    }
    return result
}
console.log(solution("  hello kitty"))