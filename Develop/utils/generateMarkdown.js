// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
    license,
  } = data;
  return `
#${title}
// {renderLicenseBadge(license)}
// {renderLicenseLink(license)}
// {renderLicenseSection(license)}
##${repo}
${description}


`;
};

module.exports = generateMarkdown;

// title
// Descr instuction usage information contribution test
// lice
// questions? github name github profile email adress
//table of contents
