const fs = require("fs");
if (!process.argv[2]) {
  console.warn(`Please input name of new shortcut-definition file.`);
  return;
}

const content = `const {
  actionOutput,
  buildShortcut,
  withVariables,
} = require("@joshfarrant/shortcuts-js");
const {
  comment,
  conditional,
  showResult,
} = require("@joshfarrant/shortcuts-js/actions");

const output = actionOutput();

const actions = [];

module.exports = buildShortcut(actions);
`;
const filename = process.argv[2].replace(/.*\/(.+)\..*/, "$1");

fs.writeFile(`src/${filename}.js`, content, (err) => {
  if (err) {
    console.error("Something went wrong :(", err);
    return;
  }
  console.log("Source file created! :)");
});
