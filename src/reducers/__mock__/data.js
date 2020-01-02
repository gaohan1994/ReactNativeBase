import Mock from 'mockjs';
/**
 * 
 * ```js
 * 模拟接口返回的数据为
 * 
 * {
 *  code: 'success',
 *  msg: '请求成功',
 *  data: [
 *    {
 *      barcode: "12332111"
 *      brand: "剩余物资"
 *      cost: 18
 *      createTime: "2019-11-21 15:23:16"
 *      firstLetter: "J"
 *      id: 69
 *      imgTemp: "http://inventory.51cpay.com/product/img066.png"
 *      limitNum: 0
 *      memberPrice: 19.99
 *      name: "军版物资德军丛林迷彩冲锋衣户外中长款保暖风衣铁血君品"
 *      number: 0
 *      pictures: ["http://inventory.51cpay.com/product/img066.png"]
 *      price: 22.5
 *      saleType: 0
 *      soldNum: 0
 *      standard: "56-58码"
 *      status: 0
 *      supplierId: 1
 *      supplierName: "自采供应商"
 *      typeId: 1
 *      typeName: "未分类"
 *      unit: "件"
 *    }
 *  ]
 * }
 * 
 * ```
 */

Mock.Random.extend({
  name: function() {
    const names = ["可口可乐", "380ml乐虎氨基酸维生素功能饮料", "艾荟萃 绿萝2盆装 白色瓷盆 绿植花卉盆栽 室内居家客厅办公室花卉绿植盆栽箱装", "古天乐看看", '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
    return this.pick(names);
  },
  standard: function() {
    const standards = ['一盆', '一碗', '一个', '一打'];
    return this.pick(standards);
  },
  supplierName: function() {
    const supplierNames = ["自采供应商", "阿迪达斯", "耐克"];
    return this.pick(supplierNames);
  },
  typeName: function() {
    const types = ["未分类", '化妆品', '运动', '保健'];
    return this.pick(types);
  },
  unit: function() {
    const units = ['个', '只', '碗'];
    return this.pick(units);
  },
  brand: function() {
    const brands = ['YSL', '纪梵希', '兰蔻', '海蓝之谜', 'Dior'];
    return this.pick(brands);
  }
});

export const productList = new Array(2).fill({}).map((_) => {
  return Mock.mock({
    'brand': '@BRAND',
    'name': '@NAME',
    'standard': '@STANDARD',
    'supplierName': '@SUPPLIERNAME',
    'typeName': '@TYPENAME',
    'unit': '@UNIT',
    'createTime': "2019-11-21 15:23:16",
    'imgTemp': '',
    'firstLetter': '#',
    'pictures': '',
    'barcode|1000000-2000000': 1000001,
    'cost|100-200': 100,
    'id|+1': 1,
    'limitNum|10-20': 10,
    'memberPrice|1-10000': 1,
    'number|10-10000': 11,
    'price|1-10000': 1,
    'saleType|1-3': 1,
    'soldNum|0-10000': 1,
    'status|0-2': 1,
    'supplierId|+1': 1,
    'typeId|+1': 1,
  });  
})  
export const productListInterfaceResult = {
  code: 'success',
  msg: 'success',
  data: productList
};