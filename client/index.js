import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import StyleContext from 'isomorphic-style-loader/StyleContext';

import HomePage from './pages/HomePage/HomePage';
import configureStore from './store/configureStore';

const css = new Set(); // CSS for all rendered React components
style => css.add(style._getCss())
const insertCss = (...styles) => styles.forEach(function(style){
  style._insertCss();
});

const store = configureStore();

const component = <Provider store={store}>
                    <StyleContext.Provider value={{ insertCss }}>
                      <HomePage />
                    </StyleContext.Provider>
                  </Provider>;

ReactDOM.hydrate(component, document.getElementById('react-app'));

