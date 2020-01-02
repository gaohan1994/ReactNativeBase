/**
 * @todo [单元测试的加入让开发更加顺利]
 * @Author: Ghan 
 * @Date: 2019-12-26 17:16:29 
 * @Last Modified by: Ghan
 * @Last Modified time: 2020-01-02 14:29:49
 * 
 * ```js
 * 
 * expect({a:1}).toBe({a:1})//判断两个对象是否相等
 * expect(1).not.toBe(2)//判断不等
 * expect(n).toBeNull(); //判断是否为null
 * expect(n).toBeUndefined(); //判断是否为undefined
 * expect(n).toBeDefined(); //判断结果与toBeUndefined相反
 * expect(n).toBeTruthy(); //判断结果为true
 * expect(n).toBeFalsy(); //判断结果为false
 * expect(value).toBeGreaterThan(3); //大于3
 * expect(value).toBeGreaterThanOrEqual(3.5); //大于等于3.5
 * expect(value).toBeLessThan(5); //小于5
 * expect(value).toBeLessThanOrEqual(4.5); //小于等于4.5
 * expect(value).toBeCloseTo(0.3); // 浮点数判断相等
 * expect('Christoph').toMatch(/stop/); //正则表达式判断
 * expect(['one','two']).toContain('one'); //不解释
 * 
 * function compileAndroidCode() {
 *  throw new ConfigError('you are using the wrong JDK');
 * }
 * 
 * test('compiling android goes as expected', () => {
 *  expect(compileAndroidCode).toThrow();
 *  expect(compileAndroidCode).toThrow(ConfigError); //判断抛出异常
 * }）
 * ```
 */
import reducer, { constants, initState } from '../demo/count.reducer';
// import { productListInterfaceResult } from './data';
import { productListInterfaceResult } from '../__mock__/data';

/**
 * @todo [简单的单元测试用例]
 * ```js
 * 
 * ```
 */

describe('测试count demo', () => {
  it('测试count + 1', () => {
    const addReducer = {
      type: constants.ADD_COUNT,
      payload: {}
    };
    expect(reducer(initState, addReducer)).toEqual({
      ...initState,
      count: 1
    });
  });

  it('测试count - 1', () => {
    const reduceReducer = {
      type: constants.REDUCE_COUNT,
      payload: {}
    };
    expect(reducer(initState, reduceReducer)).toEqual({
      ...initState,
      count: -1
    });
  });
});

/**
 * @todo [企业级开发时的单元测试用例]
 */

describe('测试接口返回demo', () => {
  
  it('期望从接口拿到数据后存入redux返回数组', () => {
    // console.table(productListInterfaceResult.data[0]);
    const reducerProductListReducer = {
      type: constants.RECEIVE_PRODUCT_LIST,
      payload: productListInterfaceResult
    };
    expect(reducer(initState, reducerProductListReducer)).toEqual({
      ...initState,
      productList: productListInterfaceResult.data
    });
  });
});

describe('购物车sdk reducer', () => {
  const cartProduct = productListInterfaceResult.data[0];

  describe('加入购物车', () => {
    const addCart = {
      type: constants.ADD_PRODUCT,
      payload: { product: cartProduct }
    };

    it('购物车中没有该商品，期望购物车中加入新的商品', () => {
      expect(reducer(initState, addCart)).toEqual({
        ...initState,
        cartList: [{
          ...cartProduct,
          number: 1
        }]
      });
    });

    it('购物车中已经存在该商品，期望购物车中的商品数量+1', () => {
      expect(reducer({...initState, cartList: [{...cartProduct, number: 2}]}, addCart)).toEqual({
        ...initState,
        cartList: [{
          ...cartProduct,
          number: 3
        }]
      });
    });

    // console.log('--- 加入购物车的商品 ---');
    // console.table({...cartProduct, number: 1});
  });

  describe('从购物车中删除', () => {
    const reduceInitState = {
      ...initState,
      cartList: [{...cartProduct, number: 2}]
    };

    const reduceCart = {
      type: constants.REDUCE_PRODUCT,
      payload: { product: cartProduct }
    };

    it('购物车种商品数量>1，期望购物车中该商品数量-1', () => {
      
      expect(reducer(reduceInitState, reduceCart)).toEqual({
        ...initState,
        cartList: [{
          ...cartProduct,
          number: 1
        }]
      });
    });

    it('购物车种商品数量===1，期望从购物车中删除该条目', () => {
      
      expect(
        reducer(
          {
            ...reduceInitState, 
            cartList: [{...reduceInitState.cartList[0], number: 1}
          ]}, 
          reduceCart
        )
      ).toEqual({
        ...initState,
        cartList: []
      });
    });
  });
});