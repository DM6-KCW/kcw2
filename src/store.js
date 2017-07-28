import { createStore, combineReducers } from 'redux';

import dresses from './ducks/products';
import blogs from './ducks/blogs';

export default createStore( combineReducers({dresses, blogs}), {} );
