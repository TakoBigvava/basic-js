import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if(Array.isArray(arr)){
    let newArr = [...arr]
  newArr.forEach((el, i)=>{
       if(el === '--discard-next') {
         if((newArr.indexOf(el) + 1) !== -1)
      newArr.splice(i, 2);
         else {
       newArr.splice(i, 1)
         }
       } else if(el === '--discard-prev') {
             if((newArr.indexOf(el) - 1) !== -1){
            newArr.splice(i - 1, 2);
          } else {
            newArr.splice(i, 1);
          }
           
       } else if(el === '--double-next') {
            if(newArr[i + 1] !== undefined ){
           newArr.splice(i, 1, arr[i + 1]);
          } else {
            newArr.splice(i, 1);
          }
      
       } else if (el === '--double-prev') {
         if((newArr.indexOf(el) - 1) !== -1){
             newArr.splice(i, 1, arr[i - 1]);
          } else {
            newArr.splice(i, 1);
          }    
       } 
       else if (newArr[i + 1] === 'undefined'){
        newArr.splice(i + 1, 1);
       }
    })
    return newArr;
  } else {
    throw new Error ('\'arr\' parameter must be an instance of the Array!') 
  }
    
  }