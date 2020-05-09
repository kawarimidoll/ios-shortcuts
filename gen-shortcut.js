const fs = require("fs");
if (!fs.existsSync(process.argv[2])) {
  console.warn(`The source file "${process.argv[2]}" is not exist.`);
  return;
}
console.log(process.argv[2]);

const shortcut = require(`./${process.argv[2]}`);
const filename = process.argv[2].replace(/.*\/(.+)\..*/, "$1");

fs.writeFileSync(
  `/Users/kawarimidoll/Library/Mobile Documents/iCloud~is~workflow~my~workflows/Documents/kawarimidoll/sync-shortcuts/${filename}.shortcut`,
  shortcut,
  (err) => {
    if (err) {
      console.error("Something went wrong :(", err);
      return;
    }
    console.log("Shortcut created! :)");
  }
);
