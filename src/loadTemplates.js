import shell from "shelljs";

import { capitalize, lowercase } from "./utils";

const loadTemplates = (module, projectDir) => {
  // Loader
  shell
    .cat(`${__dirname}/templates/TemplateLoader.js`)
    .to(
      `${projectDir}/modules/${capitalize(module)}/${capitalize(
        module
      )}Loader.js`
    );
  shell.sed(
    "-i",
    /\*?Template/g,
    `${capitalize(module)}`,
    `${projectDir}/modules/${capitalize(module)}/${capitalize(module)}Loader.js`
  );
  shell.sed(
    "-i",
    "templates",
    `${lowercase(module)}s`,
    `${projectDir}/modules/${capitalize(module)}/${capitalize(module)}Loader.js`
  );

  // Model
  shell
    .cat(`${__dirname}/templates/TemplateModel.js`)
    .to(
      `${projectDir}/modules/${capitalize(module)}/${capitalize(
        module
      )}Model.js`
    );
  shell.sed(
    "-i",
    /\*?Template/g,
    `${capitalize(module)}`,
    `${projectDir}/modules/${capitalize(module)}/${capitalize(module)}Model.js`
  );

  // Type
  shell
    .cat(`${__dirname}/templates/TemplateType.js`)
    .to(
      `${projectDir}/modules/${capitalize(module)}/${capitalize(module)}Type.js`
    );
  shell.sed(
    "-i",
    /\*?Template/g,
    `${capitalize(module)}`,
    `${projectDir}/modules/${capitalize(module)}/${capitalize(module)}Type.js`
  );

  // MutationAdd
  shell
    .cat(`${__dirname}/templates/TemplateAddMutation.js`)
    .to(
      `${projectDir}/modules/${capitalize(module)}/mutations/${capitalize(
        module
      )}AddMutation.js`
    );
  shell.sed(
    "-i",
    /\*?Template/g,
    `${capitalize(module)}`,
    `${projectDir}/modules/${capitalize(module)}/mutations/${capitalize(
      module
    )}AddMutation.js`
  );
  shell.sed(
    "-i",
    /\*?template/g,
    `${lowercase(module)}`,
    `${projectDir}/modules/${capitalize(module)}/mutations/${capitalize(
      module
    )}AddMutation.js`
  );

  // MutationEdit
  shell
    .cat(`${__dirname}/templates/TemplateEditMutation.js`)
    .to(
      `${projectDir}/modules/${capitalize(module)}/mutations/${capitalize(
        module
      )}EditMutation.js`
    );
  shell.sed(
    "-i",
    /\*?Template/g,
    `${capitalize(module)}`,
    `${projectDir}/modules/${capitalize(module)}/mutations/${capitalize(
      module
    )}EditMutation.js`
  );
  shell.sed(
    "-i",
    /\*?template/g,
    `${lowercase(module)}`,
    `${projectDir}/modules/${capitalize(module)}/mutations/${capitalize(
      module
    )}EditMutation.js`
  );
};

export default loadTemplates;
