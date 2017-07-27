import { createStore } from 'redux';

import dresses from './ducks/products';
import blogs from './ducks/blogs';

export default createStore( dresses, blogs );
