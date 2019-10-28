import * as React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-centerm-sdk';
import LinearGradient from 'react-native-linear-gradient';
import ImageViewerComponent from '../../component/picker/image.viewer.picker';

interface Props {}
interface State {
  visible: boolean;
}

export default class TestImageViewer extends React.Component<Props> {
  state = {
    visible: false
  };

  public openModal = () => {
    this.setState({ visible: true });
  }

  public closeModal = () => {
    this.setState({ visible: false });
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

    const imageUrls = [
      {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572271297607&di=38072b931e0d2fe20cb2e17f29101761&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F982f1dc23b295808ee39852bab0d2bc5347fae13.jpg'},
      {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572271334103&di=7d37dcd118a362764b68c635d870e496&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F09%2F20170809134340_VyQvF.jpeg'},
      {url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572271357627&di=4887b8f8a947de433b19bf33cb34921e&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201504%2F28%2F20150428132205_WLHKa.jpeg"},
    ];

    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Button
          {...buttonLinearProps}
          title="查看大图"
          onPress={this.openModal}
        />
        <ImageViewerComponent 
          imageUrls={imageUrls}
          visible={this.state.visible} 
          onClose={this.closeModal} 
        />
      </View>
    );
  }
}
