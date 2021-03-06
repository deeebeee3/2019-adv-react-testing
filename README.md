This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


-----------

1. npm install --save enzyme enzyme-adapter-react-16 (find version of react in package.json - in this case it's 16)...

2. Create setupTests.js file - file name is important - Jest looks for it when it starts up and executes it before any other code inside the project gets loaded - good place for initial configuration setup

3. Enzyme:
- static rendering (just plain HTML)
- shallow rendering {shallow} (render just the given react component and none of it's children (will render other non-react HTML))
- Full DOM rendering {mount} (render the component and all of it's children + let us modify it afterwards)

4. https://facebook.github.io/create-react-app/docs/importing-a-component#absolute-imports

5. Enzyme Full DOM rendering is sharing the same fake DOM that has been implemented by that JSDOM library - this can cause issues across tests - so need to make sure we do appropriate clean up and unmount our components that got mounted to the virtual DOM.

6. setState doesn't happen immediately - it is asynchronous - all setState calls get queued up and react decides when to invoke them - so when testing we need to force our component to update - luckily we can do this with enzyme with .update()

7. Difference between Redux Thunk and Redux Promise:

redux-thunk allows your action creators to return a function :

function myAction(payload){
    return () => {
        // use dispatch as you please
    }
}

-----------

redux-promise allows them to return a promise :

function myAction(payload){
    return new Promise((resolve, reject) => {
        resolve(someData); // redux-promise will dispatch someData
    });
}

-----------
