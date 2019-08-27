import shell from 'shelljs';

import { capitalize, lowercase } from './utils';

const loadTemplates = (module, projectDir) => {
  // Loader
  shell
    .cat(`${__dirname}/templates/TemplateLoader.txt`)
    .to(`${projectDir}/modules/${module}/${capitalize(module)}Loader.ts`);
  shell.sed(
    '-i',
    /\*?Template/g,
    `${capitalize(module)}`,
    `${projectDir}/modules/${module}/${capitalize(module)}Loader.ts`
  );
  shell.sed(
    '-i',
    'templates',
    `${lowercase(module)}s`,
    `${projectDir}/modules/${module}/${capitalize(module)}Loader.ts`
  );

  // Model
  shell
    .cat(`${__dirname}/templates/TemplateModel.txt`)
    .to(`${projectDir}/modules/${module}/${capitalize(module)}Model.ts`);
  shell.sed(
    '-i',
    /\*?Template/g,
    `${capitalize(module)}`,
    `${projectDir}/modules/${module}/${capitalize(module)}Model.ts`
  );

  // Type
  shell
    .cat(`${__dirname}/templates/TemplateType.txt`)
    .to(`${projectDir}/modules/${module}/${capitalize(module)}Type.ts`);
  shell.sed(
    '-i',
    /\*?Template/g,
    `${capitalize(module)}`,
    `${projectDir}/modules/${module}/${capitalize(module)}Type.ts`
  );

  // MutationAdd
  shell
    .cat(`${__dirname}/templates/TemplateAddMutation.js`)
    .to(
      `${projectDir}/modules/${module}/mutations/${capitalize(
        module
      )}AddMutation.js`
    );
  shell.sed(
    '-i',
    /\*?Template/g,
    `${capitalize(module)}`,
    `${projectDir}/modules/${module}/mutations/${capitalize(
      module
    )}AddMutation.js`
  );
  shell.sed(
    '-i',
    /\*?template/g,
    `${lowercase(module)}`,
    `${projectDir}/modules/${module}/mutations/${capitalize(
      module
    )}AddMutation.js`
  );

  // MutationEdit
  shell
    .cat(`${__dirname}/templates/TemplateEditMutation.js`)
    .to(
      `${projectDir}/modules/${module}/mutations/${capitalize(
        module
      )}EditMutation.js`
    );
  shell.sed(
    '-i',
    /\*?Template/g,
    `${capitalize(module)}`,
    `${projectDir}/modules/${module}/mutations/${capitalize(
      module
    )}EditMutation.js`
  );
  shell.sed(
    '-i',
    /\*?template/g,
    `${lowercase(module)}`,
    `${projectDir}/modules/${module}/mutations/${capitalize(
      module
    )}EditMutation.js`
  );
};

export default loadTemplates;
