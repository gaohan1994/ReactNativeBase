import * as React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-centerm-sdk';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker';
import Dialog from '../../component/dialog/dialog';

export const IMAGE_PICKER_ERROR_MAP: any = {
  'Cannot run camera on simulator': '无法在模拟器上拍照',
  'User did not grant camera permission.': '请先允许相机权限',
  'Cannot access images. Please allow access if you want to be able to select images.': '请先允许相机权限',
  'User cancelled image selection': '',
  'Cannot find image data': '没有找到图片资源',
  "Can't find the image at the specified path": '没有找到图片地址',
  'Error while cleaning up tmp files': '清理图片时出现错误',
  'Cannot save image. Unable to write to tmp location.': '保存图片时出现错误',
  'Cannot process video data': '无法处理视频数据',
};

interface Props {}

export default class TestImagePicker extends React.Component<Props> {

  public openCameraPicker = () => {
    ImagePicker.openCamera({
      cropping: false,
      loadingLabelText: '正在上传数据，请稍候...',
      cropperCancelText: '取消',
      cropperChooseText: '选择照片',
    }).then((image: any) => {
      this.updateImages([image]);
    }).catch(error => {
      Dialog.showToast(IMAGE_PICKER_ERROR_MAP[error.message]);
    });
  }
  public openImagePicker = () => {
    ImagePicker.openPicker({
      multiple: true,
      cropping: false,
      loadingLabelText: '正在上传数据，请稍候...',
      cropperCancelText: '取消',
      cropperChooseText: '选择照片',
      showsSelectedCount: true,
    }).then((images: any) => {
      this.updateImages(images);
    }).catch(error => {
      Dialog.showToast(IMAGE_PICKER_ERROR_MAP[error.message]);
    });
  }

  public updateImages = (images: any[]) => {
    console.log('images: ', images);
  }

  public render() {
    const buttonLinearProps = {
      ViewComponent: LinearGradient,
      linearGradientProps: {
        colors: ['#F05065', '#FDA75C'],
        start: {x: 0, y: 0},
        end: {x: 1, y: 0}
      }
    };
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Button
          {...buttonLinearProps}
          title="选择拍照"
          onPress={this.openCameraPicker}
        />

        <Button
          {...buttonLinearProps}
          title="选择照片"
          onPress={this.openImagePicker}
        />
      </View>
    );
  }
}
