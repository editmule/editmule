const execSync = require('child_process').execSync;

if (process.env.NODE_ENV === 'production') {
  execSync("aws cloudfront create-invalidation --distribution-id E2YTC3JMCORKJK --paths '/*' && aws cloudfront create-invalidation --distribution-id E2YTC3JMCORKJK --paths '/*'", {stdio: 'inherit'});
  console.log('\x1b[36m%s\x1b[0m', '🚀  Success! Deployed to https://www.editmule.com');
} else {
  execSync("aws cloudfront create-invalidation --distribution-id E1MOGZ9OEL206H --paths '/*' && aws cloudfront create-invalidation --distribution-id E1MOGZ9OEL206H --paths '/*'", {stdio: 'inherit'});
  console.log('\x1b[36m%s\x1b[0m', '🚀  Success! Deployed to https://staging.editmule.com');
}
