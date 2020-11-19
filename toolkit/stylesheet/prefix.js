const fs = require("fs");
const path = require("path");
const scope = require("scope-css");

let halfmoon = fs.readFileSync(path.join(__dirname, "node_modules/halfmoon/css/halfmoon-variables.css")).toString();

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

halfmoon = halfmoon.replace(/\.codeberg-design body/g, ".codeberg-design");
halfmoon = halfmoon.replace(/\.codeberg-design html/g, "html");

fs.writeFileSync("halfmoon.css", halfmoon);
