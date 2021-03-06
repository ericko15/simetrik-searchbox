# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Respuestas

1. ¿Por qué no debería usar la librería JQuery, si estoy usando ReactJS?
  * R: No es recomendable usar JQuery junto con react dado que JQuery modifica directamente el dom y ReactJS usa un modelo de DOM virtual el cual copia el DOM y lo modifica solo cuando es necesario

2. ¿Por qué usarías Hooks de las nuevas versiones de ReactJS, en lugar de class component? 
  * R: Porque ayuda a  aislar y compartir lógica que sea común para 1 o más componentes.

3. ¿Que es un archivo JSX?
  * R: Son los archivos usados en react, produce elementos de react los cuales son muy similares a html pero con todo el poder de javascript.

4. ¿Qué diferencia hay entre una function y una arrow function de Javascript?
  * R: La diferencia esta en el scope dentro de esta misma, en las function el scope solo es el que tiene al iniciar su ejecución, mientras que el de la arrow function tiene un scope compartido con quien lo llama

5. ¿Qué es Redux y cómo nos ayuda en los proyectos?
  * R: Redux es una librería para el manejo de estados en la aplicación, está inspirada en flux la cual es una arquitectura para la gestión del flujo de datos.
  * Nos ayuda a ese manejo del estado que a medida que el proyecto crece se vuelve más y más complejo de manejar y de hacer seguimiento.

6. ¿Por qué usuarios pruebas unitarias en tu código?
  * Para la verificación de la funcionalidad dentro de la aplicación.
  * Para diseñar mi aplicación.

7. ¿Quá nos permite hacer la siguiente declaración?
  ``` 
  const anyFunction = (param_1) => (param_2) => param_1 + param_2
  ```
  * R: anyFunction es una función que recibe 1 parámetro y devuelve una función que recibe otro parámetro y que al ejecutarse devuelve el resultado de la suma de los parámetros de ambas funciones  
