/**
 * @todo [该reducer为测试reducer可以删掉，正常reducer直接放入reducers目录下即可不需要在创建目录]
 * @Author: Ghan 
 * @Date: 2019-12-26 17:15:34 
 * @Last Modified by: Ghan
 * @Last Modified time: 2019-12-26 17:16:05
 */

import { AppReducer } from '../app.reducers';

export const constants = {
  ADD_COUNT: 'ADD_COUNT',
  REDUCE_COUNT: 'REDUCE_COUNT',
};

export declare namespace CountReducer {

  namespace Reducers {
    interface Add {
      type: typeof constants.ADD_COUNT;
      payload: any;
    }

    interface Reduce {
      type: typeof constants.REDUCE_COUNT;
      payload: any;
    }
  }

  interface State {
    count: number;
  }

  type Action = 
    Reducers.Add
    | Reducers.Reduce;
}

const initState: CountReducer.State = {
  count: 0
};

export default function Count (state: CountReducer.State = initState, action: CountReducer.Action) {
  switch (action.type) {

    case constants.ADD_COUNT: {
      return {
        ...state,
        count: state.count + 1
      };
    }

    case constants.REDUCE_COUNT: {
      return {
        ...state,
        count: state.count - 1
      };
    }

    default: {
      return {
        ...initState
      };
    }
  }
}

export const getCount = (state: AppReducer.AppState) => state.count.count;