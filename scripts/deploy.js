const execSync = require('child_process').execSync;

if (process.env.NODE_ENV === 'production') {
  execSync("aws s3 sync build/ s3://editmule-app-client --delete", {stdio: 'inherit'});
} else {
  execSync("aws s3 sync build/ s3://editmule-staging --delete", {stdio: 'inherit'});
}
