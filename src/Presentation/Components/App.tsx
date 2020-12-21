import React from 'react'
import {Provider} from "react-redux";
import {store} from "../store/store";
import {HomePage} from "../Pages/HomePage";


const App = () => (
  <Provider store={store}>
    <HomePage/>
  </Provider>
)

export default App;
