import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(/* members */) {
  const arg = Array.from(arguments[0]);
  let arr=[]
  let space =  /\s/g;
  arg.map((name) => {
    if(typeof name ==="string"){
      return name.trim()
    }
     }).forEach((name)=>{
  if(typeof name =='string'){
    arr.push(name[0].toUpperCase())
  
  } })
    
  if(arr.length == 0){
    throw new NotImplementedError('Not implemented');
  }
   return  arr.sort().join('')
  }
  