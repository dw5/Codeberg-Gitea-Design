const fs = require("fs");
const path = require("path");
const scope = require("scope-css");

let halfmoon = fs.readFileSync(path.join(__dirname, "node_modules/halfmoon/css/halfmoon-variables.css")).toString();

// Keep the halfmoon comment.
let halfmoonComment = "";
if (halfmoon.substr(0, 2) === "/*") {
	halfmoonComment = halfmoon.substr(0, halfmoon.indexOf("*/") + 2);
}

// Add .codeberg-design scope & codeberg-design- keyframes prefix.
halfmoon = halfmoonComment + scope(
	halfmoon,
	".codeberg-design",
	{
		keyframes: "codeberg-design-",
	}
);

// Fix body & html selectors.
halfmoon = halfmoon.replace(/\.codeberg-design\s+html/g, "html.codeberg-design");
halfmoon = halfmoon.replace(/\.codeberg-design\s+body/g, ".codeberg-design");
halfmoon = halfmoon.replace(/\.codeberg-design(\s*{[\s\n]*position:\s*absolute;)/g, "html.codeberg-design>body$1");

// Fix rem-based units.
// Halfmoon actually uses different values for --base-html-font-size dependent on the viewport width.
// We are using the smallest value here (used on mobile), which is 62.5%, with a base font size of 16px.
const formatPx = n => n.toFixed(3).replace(/(\.\d*[1-9]\d*)0+$|\.0+$/, "$1") + "px";
halfmoon = halfmoon.replace(/\b(\d*\.?\d+)rem\b/g, (match, value) => formatPx(value * 0.625 * 16));

fs.writeFileSync("halfmoon.css", halfmoon);
fs.writeFileSync("halfmoon.min.js", fs.readFileSync(path.join(__dirname, "node_modules/halfmoon/js/halfmoon.min.js")));
