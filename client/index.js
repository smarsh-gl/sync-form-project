/**
 * Imports
 */

import vdux from 'vdux'
import app from './app'
import store from './store'

/**
 * App
 */

document.addEventListener('DOMContentLoaded', () => vdux(
  store,
  app,
  document.body
))
