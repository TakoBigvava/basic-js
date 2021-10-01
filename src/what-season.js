import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(/* date */) {
  let date = new Date(arguments[0]);
  const month = date.getMonth();
  let result = "";
if(arguments.length === 0){
  return "Unable to determine the time of year!"
} else if(isNaN(Date.parse(arguments[0]))){
return "Invalid date!"
} else {
     switch (month) {
		case 11:
		case 0:
		case 1:
			result = "winter";
			break;
		case 3:
		case 4:
		case 2:
			result = "spring";
			break;
		case 6:
		case 7:
		case 5:
			result = "summer";
			break;
		case 9:
		case 10:
		case 8:
			result = "fall";
			break;
	default:
    result =  "Invalid date!"
	}

  return result;
}   
}
