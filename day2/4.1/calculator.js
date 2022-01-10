const yargs = require("yargs");
yargs.command({
  command: "add",
  describe: "Sum of 2 values",
  builder: {
    a: {
      describe: "a is first param",
      demandOption: true,
      type: "number",
    },
    b: {
      describe: "b is second param",
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    console.log(argv.a + argv.b);
  },
});
yargs.command({
  command: "sub",
  describe: "Sub",
  builder: {
    a: {
      describe: "a is first param",
      demandOption: true,
      type: "number",
    },
    b: {
      describe: "b is second param",
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    console.log(argv.a - argv.b);
  },
});
yargs.command({
  command: "mult",
  describe: "mult",
  builder: {
    a: {
      describe: "a is first param",
      demandOption: true,
      type: "number",
    },
    b: {
      describe: "b is second param",
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    console.log(argv.a * argv.b);
  },
});
yargs.command({
  command: "pow",
  describe: "pow",
  builder: {
    a: {
      describe: "a is first param",
      demandOption: true,
      type: "number",
    },
    pow: {
      describe: "pow is pow param",
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    console.log(Math.pow(argv.a ,argv.pow));
  },
});

yargs.parse();