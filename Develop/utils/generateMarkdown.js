// TODO: Create a function that returns a license badge based on which license is passed in

const license = require('license');
const writeToFile = require('./writeToFile');
// If there is no license, return an empty string
function renderLicenseBadge(github, repo) {
  return `
  ![GitHub](https://img.shields.io/github/license/${github}/${repo})
  `;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenses, github) {
  const currentYear = new Date().getFullYear();
  const licenseFile = license.getLicense(licenses, {
    Author: github,
    date: currentYear,
  });

  writeToFile('./LICENSE', licenseFile);
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  console.log(data);
  const {
    github,
    repo,
    title,
    description,
    installation,
    usage,
    contributing,
    tests,
    licenses,
    email,
  } = data;
  renderLicenseLink(licenses, github);
  return `

  # ${title}
${renderLicenseBadge(github, repo)}
## Description

${description}

## table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## installation

\`\`\`
${installation}
\`\`\`

## usage
${usage}
 ${tests}
 ${contributing}
## license
${license}

## Questions
GitHub:${github}
Email:${email}
`;
};

module.exports = generateMarkdown;

// title
// Descr instuction usage information contribution test
// lice
// questions? github name github profile email adress
//table of contents
// To create you own README lets frist start by getting npm up and running use
//  \`\`\`
//  npm install
//  \`\`\`
//  in the command line.
//  then download
//  \`\`\`
//  inquirer
//  \`\`\`
//  which is used to get inputs from the command line in the forms of prompts
//   you have installed those to start the application
//   in the command line type \`\`\`node index.js\`\`\` in the command line
//  after answering all the prompts to generate the READEME which will be called README.MD in the root.

// {renderLicenseBadge(license)}
// {renderLicenseLink(license)}
// {renderLicenseSection(license)}

// Hey welcome to my project help produce a quality README with information about the app you created!
// this is a command-line application the runs with Node.js that generates a README file based on the information you tell it about your project.
