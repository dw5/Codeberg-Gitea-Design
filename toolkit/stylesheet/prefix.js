const fs = require("fs");
const path = require("path");
const scope = require("scope-css");

let halfmoon = fs.readFileSync(path.join(__dirname, "node_modules/halfmoon/css/halfmoon-variables.min.css")).toString();
halfmoon = halfmoon.replace(/:root/, ":host");

let halfmoonComment = "";
if (halfmoon.substr(0, 2) === "/*") {
	halfmoonComment = halfmoon.substr(0, halfmoon.indexOf("*/") + 2);
}

halfmoon = halfmoonComment + scope(
	halfmoon,
	".codeberg-design",
	{
		keyframes: "codeberg-design-",
	}
);

halfmoon = halfmoon.replace(/\.codeberg-design html/g, "html.codeberg-design");

fs.writeFileSync("halfmoon.min.css", halfmoon);
