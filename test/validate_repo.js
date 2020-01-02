const { CLIEngine } = require("eslint");
const tap = require("tap");
const config = require("..");

const cli = new CLIEngine({
  ...config,
  useEslintrc: false
});

const files = [
  'index.js',
];

const report = cli.executeOnFiles(files);

tap.equal(report.errorCount, 0);
tap.equal(report.warningCount, 0);
