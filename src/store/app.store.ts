import { createStore } from 'redux';
import enhancer from './app.enhancer';
import rootReducer from '../reducers/app.reducers';

export default function configStore () {
  const store = createStore(rootReducer, enhancer);
  return store;
}

const store = configStore();

export { store };