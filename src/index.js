#!/usr/bin/env babel-node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import shell from "shelljs";

import { capitalize } from "./utils";
import loadTemplates from "./loadTemplates";

const init = () => {
  console.log(
    chalk.green(
      figlet.textSync("GraphQL CLI", {
        // font: "Ghost",
        horizontalLayout: "default",
        verticalLayout: "default"
      })
    )
  );
};

const askQuestions = () => {
  const processAnswers = answers => {
    if (answers.other === "Other") {
      const questions = [
        {
          name: "CUSTOM_DIR",
          type: "input",
          message: "Custom directory?"
        }
      ];
      return inquirer.prompt(questions);
    }
    return null;
  };

  const questions = [
    {
      name: "MODULE",
      type: "input",
      message: "What is the name of the graphql module?"
    },
    {
      name: "PROJECT_DIR",
      type: "input",
      message: "Directory of the project",
      default: process.cwd()
    }
  ];
  return inquirer.prompt(questions, processAnswers);
};

const createFiles = (module, projectDir) => {
  shell.mkdir("-p", [
    `${projectDir}/modules/${capitalize(module)}/mutations`,
    `${projectDir}/modules/${capitalize(module)}/query`
  ]);
  // modules/{module}/{module}Model.js
  // modules/{module}/{module}Type.js
  // modules/{module}/{module}Loader.js
  // modules/{module}/mutations/{module}AddMutation.js
  // modules/{module}/mutations/{module}EditMutation.js
  // modules/{module}/query/{module}Query.js

  const files = [
    `${projectDir}/modules/${capitalize(module)}/${capitalize(module)}Model.js`,
    `${projectDir}/modules/${capitalize(module)}/${capitalize(module)}Type.js`,
    `${projectDir}/modules/${capitalize(module)}/${capitalize(
      module
    )}Loader.js`,
    `${projectDir}/modules/${capitalize(module)}/mutations/${capitalize(
      module
    )}AddMutation.js`,
    `${projectDir}/modules/${capitalize(module)}/mutations/${capitalize(
      module
    )}EditMutation.js`,
    `${projectDir}/modules/${capitalize(module)}/query/${capitalize(
      module
    )}Query.js`
  ];
  shell.touch(files);
  loadTemplates(module, projectDir);
  return files;
};

const success = filepath => {
  console.log(chalk.white.bgGreen.bold(`Done! Files created at ${filepath}`));
};

const run = async () => {
  // show script introduction
  init();

  // ask questions
  const answers = await askQuestions();
  const { MODULE, PROJECT_DIR } = answers;

  // create the file
  createFiles(MODULE, PROJECT_DIR);

  // show success message
  success(PROJECT_DIR);
};

run();
