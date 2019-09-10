const { red, reset } = require("../../util/color");
console.error(`${red}NOT OK. Wrong path.${reset}`, module.id);
process.exit(1);
