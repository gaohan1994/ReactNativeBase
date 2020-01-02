/*
 * @Author: Ghan 
 * @Date: 2019-10-28 16:19:29 
 * @Last Modified by: Ghan
 * @Last Modified time: 2019-12-30 09:48:26
 */
import TestMain from '../../container/test/test.main';
import HomeMain from '../../container/home/home.main';
import CentermSdk from '../../container/test/test.centerm.sdk';
import TestDeviceInfo from '../../container/test/test.device.info';
import Web from '../../container/web/web';
import TestWeb from '../../container/test/test.web';
import TestDatePicker from '../../container/test/test.date.picker';
import TestImageViewer from '../../container/test/test.image.viewer';
import TestImagePicker from '../../container/test/test.image.picker';
import TestQRCode from '../../container/test/test.qrcode';
import TestPDF from '../../container/test/test.pdf.view';
import TestSwiper from '../../container/test/test.swiper';
import TestShadowCard from '../../container/test/test.shadow.card';
import TestSlider from '../../container/test/test.slider';
import TestToast from '../../container/test/test.toast';
import TestTabs from '../../container/test/test.tabs';
import TestStepper from '../../container/test/test.stepper';
import TestPullPikcer from '../../container/test/test.pull.picker';
import TestWheel from '../../container/test/test.wheel';
import TestDp from '../../container/test/test.dp';
import TestBadge from '../../container/test/test.badge';
import TestActionPopover from '../../container/test/test.action.popover';
import TestInternation from '../../container/test/test.internation';

export const StackRouteKeyMap = {
  test: {
    containerName: 'testContainer',
    initialRouteName: 'Test'
  },
  home: {
    containerName: 'homeContainer',
    initialRouteName: 'Home'
  }
};

export const routeMap = {
  /**
   * @param {Test} 测试页面
   */
  Test: {
    screen: TestMain,
    path: "Test"
  },
  CentermSdk: {
    screen: CentermSdk,
    path: "CentermSdk",
  },
  TestDeviceInfo: {
    screen: TestDeviceInfo,
    path: "TestDeviceInfo"
  },
  TestWeb: {
    screen: TestWeb,
    path: "TestWeb"
  },
  TestDatePicker: {
    screen: TestDatePicker,
    path: "TestDatePicker"
  },
  TestImageViewer: {
    screen: TestImageViewer,
    path: "TestImageViewer"
  },
  TestImagePicker: {
    screen: TestImagePicker,
    path: "TestImagePicker"
  },
  TestQRCode: {
    screen: TestQRCode,
    path: "TestQRCode"
  },
  TestPDF: {
    screen: TestPDF,
    path: "TestPDF"
  },
  TestSwiper: {
    screen: TestSwiper,
    path: "TestSwiper"
  },
  TestShadowCard: {
    screen: TestShadowCard,
    path: "TestShadowCard"
  },
  TestSlider: {
    screen: TestSlider,
    path: "TestSlider"
  },
  TestToast: {
    screen: TestToast,
    path: "TestToast"
  },
  TestTabs: {
    screen: TestTabs,
    path: "TestTabs"
  },
  TestStepper: {
    screen: TestStepper,
    path: "TestStepper"
  },
  TestPullPikcer: {
    screen: TestPullPikcer,
    path: "TestPullPikcer"
  },
  TestWheel: {
    screen: TestWheel,
    path: "TestWheel"
  },
  TestDp: {
    screen: TestDp,
    path: "TestDp"
  },
  TestBadge: {
    screen: TestBadge,
    path: "TestBadge"
  },
  TestActionPopover: {
    screen: TestActionPopover,
    path: "TestActionPopover"
  },
  TestInternation: {
    screen: TestInternation,
    path: "TestInternation"
  },
  /**
   * @param {Home} 主页
   */
  Home: {
    screen: HomeMain,
    path: "Home"
  },
  Web: {
    screen: Web,
    path: "Web/:url/:title"
  },
};