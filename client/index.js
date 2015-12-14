import vdux from 'vdux'
import { createStore, combineReducers, applyMiddleware, compose  } from 'redux'
import { createDevTools } from 'redux-devtools'

import reducer from './lib/reducer'
import view from './lib/view'

const store = createStore(reducer);

document.addEventListener("DOMContentLoaded", () => {
  vdux(store, view, document.body)
})
