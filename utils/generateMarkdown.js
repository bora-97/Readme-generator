// function to generate markdown for README
function generateMarkdown(userAsnwers,data) {
  return `
  ${userAnswers.gitUsername}

  ${userAnswers.projectTitle}

  ${userAnswers.gitRepository}

  ${userAnswers.projctContributors}

  ${userAnswers.projectInstructions}

  ${userAnswers.projectFramework}
`;
}

module.exports = generateMarkdown;
