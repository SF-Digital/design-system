# Introduction

## Project content:

- Web UI components made with **React**
- Company **typography** and **colour palette**
- Design documentation made with **Storybook**
- Configuration for dev tools such as **Eslint**

# How to use

## 1. Clone the Git repo

`git clone git@github.com:SF-Digital/design-system.git`

- The repository is hosted publically on [Github](https://github.com/SF-Digital/design-system)
## 2. Install dependencies
`npm install`
- Please use npm as this is where we are hosting the package
## 3. Start the project
- **Build**: `npm run build`
- **Development server**: `npm run dev` *(localhost:6006)*
- **Clean**: `npm run cbum` (removes node_modules in all packages, removes package-lock.json and reinstalls)

## 4. Build the project
When opening a PR, you need to build the tokens:
- First, run `npm run changeset` to specify your changes and generate a changelog.
- Then, when you're satisfied, run `npm run version-packages` to generate a new version number.

# Pattern composition

We use a strategy know as pattern composition to build our components, in order to minimise the bloating and  improve re-usability of components.

### Eg: Button Component

As you will see in this example, instead of passing many props to a component such as hasLeftIcon or hasRightIcon, and then constructing our component dynamically, we have numerous sub-components that work together to build up the desired outcome.

```
 <Button.Root>
      <Button.Prefix>
        <CaretLeft weight="bold" />
      </Button.Prefix>
      Button
      <Button.Suffix>
        <CaretRight weight="bold" />
      </Button.Suffix>
    </Button.Root>
```

