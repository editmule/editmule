const execSync = require('child_process').execSync;

if (process.env.NODE_ENV === 'production') {
  console.log('\x1b[31m%s\x1b[0m', '🚨  WARNING! Deploying to production: https://www.editmule.com');
  execSync("REACT_APP_CONFIG_MODE=production yarn build", {stdio: 'inherit'})
} else {
  console.log('\x1b[36m%s\x1b[0m', '🚀  Deploying to staging: https://staging.editmule.com');
  execSync("REACT_APP_CONFIG_MODE=staging yarn build", {stdio: 'inherit'});
}
