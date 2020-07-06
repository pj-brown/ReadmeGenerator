const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
return inquirer.prompt([
    {
      // the input type the user will interact with
      // input -> regular text
      type: "input",
      // key to be referenced inside the callback function inside the promise
      name: "title",
      // message to render to the user
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
      type: "input",
      name: "license",
      message: "Select your license type."
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

promptUser()
  .then(function(answers) {
    return writeFileAsync(
        "README.md",
        `# ${answers.title}\n\n### Description\n\n${answers.description}\n\n### Table of Contents\n\n### Installation${answers.installation}\n\n### Usage\n\n${answers.usage}\n\n#### License\n\n${answers.license}\n\n### Contributing\n\n### Tests\n\n${answers.testInstructions}\n\n### Questions\n[My GitHub Profile](https://github.com/${answers.github})\n\nEmail: ${answers.email}`
    );
  })
  .catch(function(err) {
    console.log(err);
  });