import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
	chain: [],
	getLength() {
		return this.chain.length;
	},
	error: false,

	addLink(value) {
		if (value === null) {
			this.chain.push("( null )");
		} else if (value === undefined) {
			this.chain.push("( )");
		} else {
			this.chain.push(`( ${value} )`);
		}
		return this;
	},

	finishChain() {
		return this.chain.join("~~");
	},

	removeLink(position) {
		if (
			Number.isInteger(position) &&
			position > 0 &&
			position < this.chain.length
		) {
			this.chain.splice(position - 1, 1);
			return this;
		} else {
			this.chain.length = 0;
			throw new Error("You can't remove incorrect link!");
		}
	},

	reverseChain() {
		this.chain.reverse();
		return this;
	},
};
