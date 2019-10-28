/*
 * @Author: Ghan 
 * @Date: 2019-10-28 13:47:58 
 * @Last Modified by: Ghan
 * @Last Modified time: 2019-10-28 16:30:45
 */
import { TabNavigatorConfigMap } from '../../../type/navigation/navigation.build.param';
import IconHomeFocused from "../../../assets/images/home.png";
import IconHomeUnFocused from "../../../assets/images/home.unselected.png";
import TestMain from '../../../container/test/test.main';
import HomeMain from '../../../container/home/home.main';
import TestContainer from '../stack/test/test.stack.navigator';

/**
 * @param {tabNavigatorConfigMap}
 * @todo [根据要求配置底部导航页面]
 */
const tabNavigatorConfigMap: TabNavigatorConfigMap = {
  "首页": {
    screen: HomeMain,
    path: 'Home',
    unfocusedImage: IconHomeUnFocused,
    focusedImage: IconHomeFocused
  },
  "测试": {
    screen: TestContainer,
    path: 'Test',
    unfocusedImage: IconHomeUnFocused,
    focusedImage: IconHomeFocused
  },
};

export default tabNavigatorConfigMap;