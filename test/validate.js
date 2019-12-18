const { CLIEngine } = require("eslint");
const tap = require("tap");
const config = require("..");

const cli = new CLIEngine({
  ...config,
  useEslintrc: false
});

const code = 'var foo = "hello";\nvar bar = function() {};\nbar(foo);\n';

const report = cli.executeOnText(code);

tap.equal(report.errorCount, 0);
