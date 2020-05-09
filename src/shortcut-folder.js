const { buildShortcut, withVariables } = require("@joshfarrant/shortcuts-js");
const {
  chooseFromMenu,
  conditional,
  getBatteryLevel,
  runShortcut,
  setLowPowerMode,
  showResult,
} = require("@joshfarrant/shortcuts-js/actions");

const folders = [
  ["Health", ["Log Sleep", "Log Run", "Log Cycle"]],
  [
    "Home",
    [
      ["Lights", ["Lights On", "Lights Off"]],
      ["Heating", ["Heating On", "Heating Off"]],
      ["Cameras", ["Cameras On", "Cameras Off"]],
      ["Door", ["Lock Door", "Unlock Door"]],
    ],
  ],
  ["Audio", ["Play Recent", "Resume Podcast"]],
];

const buildFolders = (arr) =>
  arr.map((shortcut) =>
    Array.isArray(shortcut)
      ? {
          label: shortcut[0],
          actions: [
            chooseFromMenu({
              prompt: shortcut[0],
              items: buildFolders(shortcut[1]),
            }),
          ],
        }
      : {
          label: shortcut,
          actions: [runShortcut({ name: shortcut })],
        }
  );

const actions = [
  chooseFromMenu({ prompt: "Open", items: buildFolders(folders) }),
];

module.exports = buildShortcut(actions);
