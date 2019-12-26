import { combineReducers } from 'redux';
import count, { CountReducer } from './demo/count.reducer';

export declare namespace AppReducer {
  interface AppState {
    count: CountReducer.State;
  }
}
/**
 * @todo [所有reducer]
 */
export default combineReducers({
  count
});