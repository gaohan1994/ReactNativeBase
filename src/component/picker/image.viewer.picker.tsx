import * as React from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { Props as ImageViewerComponentProps } from 'react-native-image-zoom-viewer/built/image-viewer.type';

interface Props extends ImageViewerComponentProps {
  visible: boolean;
  onClose: () => void;
}

export default class ImageViewerComponent extends React.Component<Props> {

  public render() {
    const { visible, onClose, ...rest} = this.props;
    return (
      <View style={this.props.visible ? { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 } : {display:'none'}}>
        <Modal 
          visible={this.props.visible}
          animationType={'fade'}
          transparent={true}
          onRequestClose={this.props.onClose}
        >
          <ImageViewer
            // imageUrls={this.props.imageUrls}
            {...rest}
            loadingRender={this.renderLoading}
            onClick={() => { this.props.onClose(); }}
            saveToLocalByLongPress={false}
            enableSwipeDown={false}
            pageAnimateTime={200}
          />
        </Modal>
      </View>
    );
  }

  private renderLoading = () => {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size={"large"} />
      </View>
    );
  }
}
