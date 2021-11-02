## Setup
```bash
# TODO Setup amplify
amplify add api
amplify add auth
```

#### Within root of project
```js
// TODO
```

#### Within reducers:
```js
// TODO
```
## Dependencies
  - [ ] TODO ADD PACKAGE.JSON FILE FOR PACKAGE DEPENDENCIES
  - [ ] ARE REDUX (ect) ALSO A DEPENDENCY?

~~Base level of the project run: `yarn add lodash`~~

## Reference
- [react-redux-firebase documentation](http://react-redux-firebase.com/)
- [react-redux-firebase repo](https://github.com/prescottprue/react-redux-firebase/tree/master/src)

## Questions
  - [x] How will we handle auth across the site?
    - This is done by using the hub listener and listing for the config. Upon config we check the auth status
  - [ ] Can we leverage this package into using public/private routes in the FE
  - [ ] Can we leverage this package to create modal or notification channels for the HUB to listen in upon?

## TODO
  - [ ] Create user profile https://github.com/prescottprue/react-redux-firebase/blob/master/src/actions/auth.js#L292