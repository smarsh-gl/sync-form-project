'use strict';
import vdux from 'vdux'
import { createStore, combineReducers, applyMiddleware, compose  } from 'redux'
import { createDevTools } from 'redux-devtools'

import reducer from './lib/reducer'
import view from './lib/view'



function configureStore() {
  const finalCreateStore = compose(
    createDevTools()
  )(createStore);
  const store = finalCreateStore(reducer);

  return store;
}
const store = createStore(reducer)

vdux(store, view, document.body)
