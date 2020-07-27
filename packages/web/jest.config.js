const { name } = require("./package.json");

module.exports = {
	displayName: name,
	name,
	preset: "ts-jest",
	setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
};
