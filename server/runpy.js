const util = require('util');
const exec = util.promisify(require('child_process').exec);

function getArgs() {
  var args = process.argv;
  return args.length > 2 ? args.slice(2).join(' ') : '';
}

async function runPy() {
  const { stdout } = await exec(`python test.py ${getArgs()}`);
  console.log(stdout);
}
runPy().catch(err => console.log('err', err));
