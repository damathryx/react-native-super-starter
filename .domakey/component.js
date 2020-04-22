const containerBody = `import React from 'react';

import {{ComponentName}}View from './{{ComponentName}}.view';
import { {{ComponentName}}PublicProps } from './{{ComponentName}}.props';

const {{ComponentName}}Container = (props: {{ComponentName}}PublicProps) => {
  const viewProps = {
    // pass generated props here
  };
  return <{{ComponentName}}View {...viewProps} />;
};

export default {{ComponentName}}Container;
`;

const styleBody = `import styled from 'utils/emotion';

export const Container = styled.View\`\`;
`

const smartPropsBody = `export type {{ComponentName}}GeneratedProps = {};

export type {{ComponentName}}PublicProps = {};
`

const dumbPropsBody = `export type {{ComponentName}}PublicProps = {};
`

const smartViewBody = `import React from 'react';
import { Container } from './{{ComponentName}}.style';
import { {{ComponentName}}GeneratedProps } from './{{ComponentName}}.props';

const {{ComponentName}}View = (props: {{ComponentName}}GeneratedProps) => {
  return <Container />;
};

export default {{ComponentName}}View;
`

const dumbViewBody = `import React from 'react';
import { Container } from './{{ComponentName}}.style';
import { {{ComponentName}}PublicProps } from './{{ComponentName}}.props';

const {{ComponentName}}View = (props: {{ComponentName}}PublicProps) => {
  return <Container />;
};

export default {{ComponentName}}View;
`


const help = `Adds a new React 'screen' component.

This will create the new screen folder (/src/screens/MyComponentName) and the screens files.

\`npm run domakey screen MyComponentName\`

Options:
 --y            Accept all default suggestions
`;

module.exports = async ({ cliArgs, cliFlags, templateName, makey }) => {
    if (cliFlags['h']) {
      makey.print(help);
      return;
    }

    const componentName = makey.toLowerCaseFirst(
      cliArgs[0] || (await makey.ask('Name of your component:'))
    );
    if (!componentName) throw Error("Please provide a component name");
    const compTypeRaw = makey.toLowerCaseFirst(
        cliArgs[1] || (await makey.ask('What is the type of the component? (m)odules, (l)ayouts, (p)rimitives:')) || 'm',
    );
    const compType = {
      m: 'modules',
      p: 'primitives',
      l: 'layouts',
    }[compTypeRaw[0].toLowerCase()];
    const smartComponent = cliFlags['y']
      ? true
      : cliFlags['container'] || (await makey.askYN('Create a (smart) container for the Comp?'));
    const ComponentName = makey.toUpperCaseFirst(componentName);
    const propsFilled = makey.templateReplace(smartComponent ? smartPropsBody : dumbPropsBody, { ComponentName });
    const styleFilled = makey.templateReplace(styleBody, {});
    const containerFilled = makey.templateReplace(containerBody, { ComponentName });
    const viewFilled = makey.templateReplace(smartComponent ? smartViewBody : dumbViewBody, { ComponentName });
    makey.createFile(
      `./src/components/${compType}/${ComponentName}/${ComponentName}.props.tsx`,
      propsFilled,
    );
    makey.createFile(
      `./src/components/${compType}/${ComponentName}/${ComponentName}.style.ts`,
      styleFilled,
    );
    if (smartComponent) {
        makey.createFile(
          `./src/components/${compType}/${ComponentName}/${ComponentName}.container.tsx`,
          containerFilled,
        );
    }
    makey.createFile(
      `./src/components/${compType}/${ComponentName}/${ComponentName}.view.tsx`,
      viewFilled,
    );
}