const path = require("path");

const generateLintingCommand = (files) => {
  const cmd = files
    .map((filePath) => `'${path.relative(process.cwd(), filePath)}'`)
    .join(" ");
  console.log(cmd);
  return `npm run lint ${cmd}`;
};

// "lint-staged": {
//   "src/**/*.{js,jsx,ts,tsx,json}": [
//     "npm run lint",
//     "npm run prettier:write"
//   ]
// },

module.exports = {
  "*.{js,jsx,ts,tsx}": [generateLintingCommand],
};
