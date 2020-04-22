## Project Structure

```
Super Starter Kit
├── android
├── assets ---------------------> fonts and other native assets
├── ios
├── scripts
├── node_modules
├── src
│   ├── components -------------> reusable components
│   ├── res        -------------> static files
│   ├── screens    -------------> screen components for navigation
│   │   ├── AccountSetup -------> Setup navigation
│   │   │   ├── ....   -------------> Screen folders
│   │   │   └── index.ts -------> Setup navigation config
│   │   ├── Authentication -----> Logged out user navigation
│   │   │   ├── ....   -------------> Screen folders
│   │   │   └── index.ts -------> Setup navigation config
│   │   ├── Main   -------------> Logged in user navigation
│   │   │   ├── ....   -------------> Tab Group folders
│   │   │   └── index.ts -------> Tab navigation config
│   │   └── index.ts  ------------------------> root app navigation config
│   ├── services     ------------> contain the api stuff
│   ├── store
│   │   ├── actions
│   │   ├── reducers
│   │   ├── selectors
│   │   └── index.tsx   ------------> Redux and redux middleware configurations
│   └── thunks
│   └── types
│   └── utils
│   └── index.tsx   ------------> Root component
├── .env
├── .env.production
└── .env.staging
```


## Architecture / how-to

Correct typing is paramount to a successful and bug-free implementation.  Once mastered, it adds
minimal overhead to the effort required (can even speed up development time), assists in
clarity of code, raises and eliminates potential bugs far before they otherwise would be noticed.

### Navigation...

### Components...

 - Use hooks: for state, lifecycle, redux / global state
 - Separate this complex/stateful logic into the 'MyComponent.container.tsx' file
 - Define template with minimal logic in 'MyComponent.view.tsx' file
 - Define the props in your 'MyComponent.props.ts' file
