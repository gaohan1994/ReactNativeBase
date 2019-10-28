/*
 * @Author: Ghan 
 * @Date: 2019-10-28 13:47:58 
 * @Last Modified by: Ghan
 * @Last Modified time: 2019-10-28 16:30:45
 */
import { TabNavigatorConfigMap } from '../../../type/navigation/navigation.build.param';
import HomeMain from '../../../container/home/home.main';
import TestContainer from '../stack/test/test.stack.navigator';
import UIImage from '../../../common/image/ui.image';

/**
 * @param {tabNavigatorConfigMap}
 * @todo [根据要求配置底部导航页面]
 */
const tabNavigatorConfigMap: TabNavigatorConfigMap = {
  "首页": {
    screen: HomeMain,
    path: 'Home',
    unfocusedImage: UIImage.home_unselected,
    focusedImage: UIImage.home
  },
  "测试": {
    screen: TestContainer,
    path: 'Test',
    unfocusedImage: UIImage.home_unselected,
    focusedImage: UIImage.home
  },
};

export default tabNavigatorConfigMap;