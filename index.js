//utilizes the inquirer module
const inquirer = require("inquirer");
//utilizes the filesystem to create the README.md
const fs = require("fs");
//readme const to create parameters within the generated doc
const readme = (
  projectTitle,
  description,
  functionality,
  techUsed,
  challenges,
  updates,
  install,
  use,
  credits,
  github,
  email
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
##Questions?
    Please feel free to contact me at:  https://github.com/${github}/ or ${email}

---`;

//initiates the inquirer prompt for user input
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
    {
      // Questions section github:
      name: "github",
      type: "input",
      message: "Please enter your github username:",
    },
    {
      // Questions section email:
      name: "email",
      type: "input",
      message: "Please enter your email:",
    },
  ])
  //then uses the input to create the generated README from listed string literals and keys from user input
  .then((answers) => {
    const generatedReadme = readme(
      answers.projectTitle,
      answers.description,
      answers.functionality,
      answers.techUsed,
      answers.challenges,
      answers.updates,
      answers.install,
      answers.use,
      answers.credits,
      answers.github,
      answers.email
    );
    //writes file to file system, if there is an error there will be an error message in the console log
    fs.writeFile("newREADME.md", generatedReadme, (err) => console.log(err));
  });
