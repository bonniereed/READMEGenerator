const inquirer = require("inquirer");
const fs = require("fs");
const readme = (
  projectTitle,
  description,
  functionality,
  techUsed,
  challenges,
  updates,
  install,
  use,
  credits
) => `# Mini-Project

In this activity, you will build a command-line tool that generates an HTML portfolio page from user input.

## ${projectTitle}

## Description:
    //Description of 
    ${description}
## What the application does: 
    ${functionality}
## Technologies Used: 
    ${techUsed}
## Challenges Faced:
    ${challenges}
## Future Updates:
    ${updates}
## How to install:
    ${install}
## How to use:
    ${use}
## Credits:
    ${credits}
---`;

inquirer
  .prompt([
    {
      // Project Title
      name: "projectTitle",
      type: "input",
      message: "Please enter your project's title:",
    },
    {
      // location
      name: "location",
      type: "input",
      message: "what's your location",
    },
    {
      // bio
      name: "bio",
      type: "input",
      message: "what's your bio",
    },
    {
      // LinkedIn
      name: "linkedIn",
      type: "input",
      message: "what's your linkedIn",
    },
    {
      // GitHub
      name: "gitHub",
      type: "input",
      message: "what's your gitHub",
    },
  ])
  .then((answers) => {
    const generatedHTML = html(
      answers.name,
      answers.location,
      answers.bio,
      answers.linkedIn,
      answers.gitHub
    );
    fs.writeFile("index.html", generatedHTML, (err) => console.log(err));
  });
