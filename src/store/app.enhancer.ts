import { applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = compose;

const middlewares = [
  thunkMiddleware
];

if (__DEV__ === true) {
  middlewares.push(require('redux-logger').createLogger());
}

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  /**
   * @todo [这里加入其它中间件]
   */
);

export default enhancer;