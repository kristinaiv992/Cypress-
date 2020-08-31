1. npx init

2. npm install cypress prettier  

3. npx cypress open

# Cypress-

# .perttier config: 

{ "semi": false, "singleQuote":true, "useTabs": true, "tabWidth": 2, "bracketSpacing": true, "arrowParens": "avoid", "trailingComma": "es5"

}

# package.json

{ "name": "cypress-e2e", "version": "1.0.0", "description": "", "main": "index.js", "scripts": { "cy:open": "cypress open", "cy: run": "cypress run"

}, "author": "", "license": "ISC", "dependencies": { "cypress": "^4.12.1", "prettier": "^2.0.5" } }

# cypress.json

{
    "video": "false",
    "defaultCommandTimeout": 5000,
    "pageLoadTimeout": 10000,
    "waitForAnimations": true
}

# cypress.json

{
    "watchForFileChanges": false,
    "ChromeWebSecurity": false,
    "viewportWidth": 1000,
    "viewportHeight": 600,
    "waitForAnimation": true,
    "animationDistanceTreshold": 20,
    "defaultCommandTimeout": 6000,
    "execTimeout": 60000,
    "pageLoadTimeout": 60000,
    "requestTimeout": 15000,
    "responseTimeout": 15000,
    "video": true,
    "failOnStatusCode": false
}

# logs

npm install --sav-dev cypress-failed-log

1. Navigate to support -> index.js
require('cypress-failed-log')

2. Navigate to pluging -> index.js
module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config)
  on('task', {
      failed: require('cypress-failed-log/src/failed')
  })
}

# jenkins:

 java -jar jenkins.war -httpPort=8080 --enable-future-java

Step 2: pwd

Step3: npm run cy:run

============================================================
# package.json
{
  "name": "project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": 
  { 
    "cy:open": "cypress open", 
    "cy:run": "cypress run",
    "cy:run-dashboard": "cypress run --record --key c8fda2cc-8185-488d-a681-408b13f2d194",
    "cy:run:chrome": "cypress run --browser chrome",
    "cy:run:firefox": "cypress run --browser firefox",
    "cy:run:edge": "cypress run --browser edge",
    "cy:update-snapshots": "cypress run --env updateSnapshots=true",
    "start-jenkins-server": "java --jar jenkins.war -httpPort=8080 --enable-future-java"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cypress": "^5.0.0",
    "cypress-image-snapshot": "^3.1.1",
    "prettier": "^2.1.0"
  }
}


**At the top of the page **

/// 
<reference types="Cypress" />

