const containerBody = `import React from 'react';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

import {{ScreenName}}View from './{{ScreenName}}.view';
import { {{ScreenName}}Params } from './{{ScreenName}}.props';

const {{ScreenName}}Container: NavigationStackScreenComponent<{{ScreenName}}Params> = props => {
  const viewProps = {
    // pass generated props here
  };
  return <{{ScreenName}}View {...viewProps} />;
};

{{ScreenName}}Container.navigationOptions = {
  title: '{{ScreenTitle}}',
};

export default {{ScreenName}}Container;
`;

const styleBody = `import styled from 'utils/emotion';

export const Container = styled.ScrollView\`
  flex: 1;
  background-color: \${props => props.theme.bg.default};
  padding: 20px;
\`;
`

const propsBody = `export type {{ScreenName}}GeneratedProps = {};

export type {{ScreenName}}Params = {};
`

const viewBody = `import React from 'react';
import { Container } from './{{ScreenName}}.style';
import { {{ScreenName}}GeneratedProps } from './{{ScreenName}}.props';

const {{ScreenName}}View = (props: {{ScreenName}}GeneratedProps) => {
  return <Container />;
};

export default {{ScreenName}}View;

`


const help = `Adds a new React 'screen' component.

This will create the new screen folder (/src/screens/MyScreenName) and the screens files.

\`npm run domakey screen MyScreenName\`

Options:
 --y            Accept all default suggestions
`;

function properCaseToWords(str) {
    return str.match(/[A-Z][a-z]+/g).join(' ')
}

module.exports = async ({ cliArgs, cliFlags, templateName, makey }) => {
    if (cliFlags['h'] || !cliArgs[0]) {
      makey.print(help);
      return;
    }

    const screenName = makey.toLowerCaseFirst(
      cliArgs[0] || (await makey.ask('Name of your screen:'))
    );
    if (!screenName) throw Error("Please provide a screen name");
    const ScreenName = makey.toUpperCaseFirst(screenName);
    const ScreenTitle = cliFlags['y']
      ? properCaseToWords(ScreenName)
      : (await makey.ask(
      `Title for your screen: (${properCaseToWords(ScreenName)})`
      )) || properCaseToWords(ScreenName);
    const propsFilled = makey.templateReplace(propsBody, { ScreenName });
    const styleFilled = makey.templateReplace(styleBody, {});
    const containerFilled = makey.templateReplace(containerBody, { ScreenName, ScreenTitle });
    const viewFilled = makey.templateReplace(viewBody, { ScreenName });
    makey.createFile(
      `./src/screens/${ScreenName}/${ScreenName}.props.tsx`,
      propsFilled,
    );
    makey.createFile(
      `./src/screens/${ScreenName}/${ScreenName}.style.ts`,
      styleFilled,
    );
    makey.createFile(
      `./src/screens/${ScreenName}/${ScreenName}.container.tsx`,
      containerFilled,
    );
    makey.createFile(
      `./src/screens/${ScreenName}/${ScreenName}.view.tsx`,
      viewFilled,
    );
}