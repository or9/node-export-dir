var thing = {
	prismo: "pickles"
};
var prop = "SOME DEFAULT VALUE";

module.exports = {
	func (str = "") {
		return `#func {String} ${str}`;
	},
	get thing () {
		return thing;
	},
	set prop (val) {
		prop = val;
	},
	get prop () {
		return prop;
	}
}
