/**
 * @todo [该reducer为测试reducer可以删掉，正常reducer直接放入reducers目录下即可不需要在创建目录]
 * @Author: Ghan 
 * @Date: 2019-12-26 17:15:34 
 * @Last Modified by: Ghan
 * @Last Modified time: 2020-01-02 13:59:22
 */

import { AppReducer } from '../app.reducers';
import { merge } from 'lodash';

export const constants = {
  ADD_COUNT: 'ADD_COUNT',
  REDUCE_COUNT: 'REDUCE_COUNT',
  RECEIVE_PRODUCT_LIST: 'RECEIVE_PRODUCT_LIST',
  ADD_PRODUCT: 'ADD_PRODUCT',
  REDUCE_PRODUCT: 'REDUCE_PRODUCT',
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

    interface ReceiveProductList {
      type: typeof constants.RECEIVE_PRODUCT_LIST;
      payload: {data: any[]};
    }

    interface ManageCart {
      type: typeof constants.ADD_PRODUCT | typeof constants.REDUCE_PRODUCT;
      payload: {
        product: any
      };
    }
  }

  interface State {
    count: number;
    productList: any[];
    cartList: any[];
  }

  type Action = 
    Reducers.Add
    | Reducers.Reduce;
}

export const initState: CountReducer.State = {
  count: 0,
  productList: [],
  cartList: [],
};

export default function Count (state: CountReducer.State = initState, action: CountReducer.Action): CountReducer.State {
  switch (action.type) {

    case constants.ADD_PRODUCT: {
      const { payload } = action as CountReducer.Reducers.ManageCart;
      const { product } = payload;

      const nextCartList: any[] = merge([], state.cartList);
      const index: number = nextCartList.findIndex(p => p.id === product.id);

      if (index === -1) {
        nextCartList.push({
          ...product,
          number: 1
        });
        return {
          ...state,
          cartList: nextCartList
        };
      }

      nextCartList[index].number += 1;
      return {
        ...state,
        cartList: nextCartList
      };
    }

    case constants.REDUCE_PRODUCT: {
      const { payload } = action as CountReducer.Reducers.ManageCart;
      const { product } = payload;

      const nextCartList: any[] = merge([], state.cartList);
      const index: number = nextCartList.findIndex(p => p.id === product.id);

      if (index === -1) {
        return {...state};
      }

      if (nextCartList[index].number === 1) {
        nextCartList.splice(index, 1);
        return {
          ...state,
          cartList: nextCartList
        };
      }
      nextCartList[index].number -= 1;
      return {
        ...state,
        cartList: nextCartList
      };
    }

    case constants.RECEIVE_PRODUCT_LIST: {
      const { payload } = action;
      const { data } = payload;
      return {
        ...state,
        productList: data
      };
    }

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