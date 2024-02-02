# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


# articles I am following:
login and registration : https://medium.com/@prabhashi.mm/create-a-simple-react-app-typescript-with-login-register-pages-using-create-react-app-e5c12dd6db53
State management using Redux: https://blog.stackademic.com/manage-your-react-typescript-application-state-using-redux-toolkit-926d3b4abaa7
notifications for user login: https://blog.stackademic.com/handle-notifications-in-your-react-application-typescript-using-redux-toolkit-and-use-a-custom-d2e1c9de9db2

backend: https://github.com/Prabashi/project-mgt-app-backend/tree/auth

user authentication: https://blog.stackademic.com/create-a-backend-application-using-express-typescript-and-handle-authentication-1f67be81da60
RBAC: https://blog.stackademic.com/handle-authorization-in-react-express-typescript-application-using-role-based-access-control-2d3ab0c1dd38

To read:
Protected Routes: 
https://medium.com/@chiragmehta900/creating-protected-routes-in-react-js-with-react-router-v6-28f3a3ac53d

RBAC:
https://medium.com/@techsuneel99/implementing-role-based-access-control-rbac-in-node-js-871591b80a83

# next steps
State management using redux : https://www.youtube.com/watch?v=fxT54eRIsc4
async calls Thunk middleware: https://www.youtube.com/watch?v=2JBx_06dD1k
user authentication
RBAC

steps:
1) https://medium.com/@prabhashi.mm/create-a-simple-react-app-typescript-with-login-register-pages-using-create-react-app-e5c12dd6db53
2) https://blog.stackademic.com/manage-your-react-typescript-application-state-using-redux-toolkit-926d3b4abaa7
3) https://blog.stackademic.com/handle-notifications-in-your-react-application-typescript-using-redux-toolkit-and-use-a-custom-d2e1c9de9db2
4) https://blog.stackademic.com/create-a-backend-application-using-express-typescript-and-handle-authentication-1f67be81da60
5) https://blog.stackademic.com/handle-authorization-in-react-express-typescript-application-using-role-based-access-control-2d3ab0c1dd38