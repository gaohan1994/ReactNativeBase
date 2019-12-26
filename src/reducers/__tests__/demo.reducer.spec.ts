/**
 * @todo [单元测试的加入让开发更加顺利]
 * @Author: Ghan 
 * @Date: 2019-12-26 17:16:29 
 * @Last Modified by:   Ghan 
 * @Last Modified time: 2019-12-26 17:16:29 
 */
import reducer, { constants } from '../demo/count.reducer';

const initState = {
  count: 1
};

describe('init', () => {
  it('should add', () => {
    const addReducer = {
      type: constants.ADD_COUNT,
      payload: {}
    };
    expect(reducer(initState, addReducer)).toEqual({
      count: 2
    });
  });

  it('should reduce', () => {
    const reduceReducer = {
      type: constants.REDUCE_COUNT,
      payload: {}
    };
    expect(reducer(initState, reduceReducer)).toEqual({
      count: 0
    });
  });
});