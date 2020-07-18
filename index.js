const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the name of your application?"
    },
    {
      type: "input",
      name: "description",
      message: "Describe your application."
    },
    {
      type: "input",
      name: "installation",
      message: "How do you install your application?"
    },
    {
      type: "input",
      name: "usage",
      message: "Describe the use of your application."
    },
    {
      type: "list",
      name: "license",
      message: "Select your license type.",
      choices: ["MIT", "Apache 2.0", "GNU AGPLv3"]
    },
    {
      type: "input",
      name: "testInstructions",
      message: "How do you run your application?"
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub username."
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address."
    }
  ]);
}

// ["MIT", "Apache 2.0", "GNU AGPLv3"]

promptUser()
  .then(answers => {
    if (answers.license = "MIT") {
      answers.badge = "[![MIT](https://img.shields.io/badge/license-MIT-brightgreen)](https://choosealicense.com/licenses/mit/)";
    } else if (answers.license = "Apache 2.0") {
      answers.badge = "[![Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-orange)](https://choosealicense.com/licenses/apache-2.0/)";
    } else {
      answers.badge = "[![GNU AGPLv3](https://img.shields.io/badge/license-GNU%20AGPLv3-blue)](https://choosealicense.com/licenses/agpl-3.0/)";
    };
  return writeFileAsync(
"README.md",
`# ${answers.title}
${answers.badge}
## Description
${answers.description}
## Table of Contents
* <a href='#installation'>Installation</a>
* <a href='#usage'>Usage</a>
* <a href='#license'>License</a>
* <a href='#contribution'>Contribution</a>
* <a href='#tests'>Tests</a>
* <a href='#questions'>Questions</a>
## Installation
${answers.installation}
## Usage
${answers.usage}
## License
This application is using the ${answers.license} license.
## Contributing

## Tests
${answers.testInstructions}
## Questions
  For any questions, please contact me using one of the following links:\n
* [My GitHub Profile](https://github.com/${answers.github})\n
* ${answers.email}`
    );
  })
  .catch(err=> {
    console.log(err);
  });

    
