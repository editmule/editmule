const execSync = require('child_process').execSync;

if (process.env.NODE_ENV === 'production') {
  console.log('\x1b[31m%s\x1b[0m', '🚨  WARNING! Deploying to production: https://www.editmule.com');
  execSync("REACT_APP_CONFIG_MODE=production yarn build", {stdio: 'inherit'});

  console.log('\x1b[36m%s\x1b[0m', '🏗️  Building production.sitemap.xml');
  execSync("node ./bin/scripts/sitemap.js", {stdio: 'inherit'});

  console.log('\x1b[36m%s\x1b[0m', '📝  Moving production.robots.txt to build root as robots.txt');
  execSync("cp ./bin/etc/production.robots.txt ./build/robots.txt", {stdio: 'inherit'});

  console.log('\x1b[36m%s\x1b[0m', '🔍  Moving production.sitemap.xml to build root as sitemap.xml');
  execSync("cp ./bin/etc/production.sitemap.xml ./build/sitemap.xml", {stdio: 'inherit'});
} else {
  console.log('\x1b[36m%s\x1b[0m', '🚀  Deploying to staging: https://staging.editmule.com');
  execSync("REACT_APP_CONFIG_MODE=staging yarn build", {stdio: 'inherit'});

  console.log('\x1b[36m%s\x1b[0m', '📝  Moving staging.robots.txt to build root as robots.txt');
  execSync("cp ./bin/etc/staging.robots.txt ./build/robots.txt", {stdio: 'inherit'});

  console.log('\x1b[36m%s\x1b[0m', '🔍  Moving staging.sitemap.xml to build root as sitemap.xml');
  execSync("cp ./bin/etc/staging.sitemap.xml ./build/sitemap.xml", {stdio: 'inherit'});
}
