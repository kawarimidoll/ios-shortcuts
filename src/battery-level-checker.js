const {
  actionOutput,
  buildShortcut,
  withVariables,
} = require("@joshfarrant/shortcuts-js");
const {
  conditional,
  getBatteryLevel,
  setLowPowerMode,
  showResult,
} = require("@joshfarrant/shortcuts-js/actions");

const batteryLevel = actionOutput();

const actions = [
  getBatteryLevel({}, batteryLevel),
  conditional({
    input: "<",
    value: 20,
    ifTrue: [
      setLowPowerMode({ value: true }),
      showResult({
        text: withVariables`Your battery is at ${batteryLevel}%, you might want to charge it.`,
      }),
    ],
    ifFalse: [
      showResult({
        text: withVariables`Your battery is at ${batteryLevel}%, you  are probably fine for now.`,
      }),
    ],
  }),
];

module.exports = buildShortcut(actions);
