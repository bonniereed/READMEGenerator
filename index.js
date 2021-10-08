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
) => `README

## ${projectTitle}

## Description:
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
      // description
      name: "description",
      type: "input",
      message: "Please enter a description of your project",
    },
    {
      // What the application does
      name: "functionality",
      type: "input",
      message: "What does your application do?",
    },
    {
      // List the technologies used for the project
      name: "techUsed",
      type: "input",
      message: "What technologies did you utilize for your project?",
    },
    {
      // Challenges faced while creating project
      name: "challenges",
      type: "input",
      message: "When working on your project, what challenges did you face?",
    },
    {
      // Plans for future updates
      name: "updates",
      type: "input",
      message: "What updates are you planning to implement?",
    },
    {
      // How to install the project
      name: "install",
      type: "input",
      message: "How does one install your application?",
    },
    {
      // How to use the tool created
      name: "use",
      type: "input",
      message: "Please explain how an end user would utilize your tool: ",
    },
    {
      // Credits are due to the following apps/ collaborators:
      name: "credits",
      type: "input",
      message: "What sources/ collaborators need to be accredited?",
    },
  ])
  .then((answers) => {
    const generatedReadme = readme(
      answers.name,
      answers.location,
      answers.bio,
      answers.linkedIn,
      answers.gitHub
    );
    fs.writeFile("readme.md", generatedReadme, (err) => console.log(err));
  });
