import { NotImplementedError } from "../extensions/index.js";

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(/* matrix */) {
	let arg = Array.from(arguments[0]);
	let count = 0;
	const regex = /^(\^\^)$/;
	arg.forEach((box) => {
		box.forEach((cat) => {
			if (cat) {
				if (regex.test(cat)) {
					count++;
				}
			}
		});
	});
	return count;
}
