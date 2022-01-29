import React, { forwardRef, memo, useCallback, useImperativeHandle, useState } from "react";
import Modal from "react-native-modal";
import styleScaled from "./style";
import ImageViewer from "react-native-image-zoom-viewer";
import { TouchableOpacity, View } from "react-native";
import Icon from "../Icon";
import { moderateScale } from "react-native-size-matters";
import { IMAGE, SIZES } from "../../../Utils/Values";
import { connect } from "react-redux";
import { MODAL_IMAGE } from "../../../Utils/Themes/light";

const ModalImage = forwardRef(({ url, color }, ref) => {
  const styles = styleScaled(color);
  const [visible, setVisible] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      show() {
        setVisible(true);
      },
      hide() {
        setVisible(false);
      }
    })
  );

  const close=useCallback(()=>setVisible(false),[])

  return (
    <Modal
      isVisible={visible}
      animationIn={"fadeInUp"}
      animationInTiming={400}
      animationOutTiming={400}
      animationOut={"fadeOutDown"}
      backdropTransitionInTiming={400}
      backdropTransitionOutTiming={400}
      hideModalContentWhileAnimating={true}
      backdropColor={"black"}
      backdropOpacity={1}
      hasBackdrop={false}
      useNativeDriver={true}
      onSwipeComplete={() => setVisible(false)}
      swipeDirection={"down"}
      statusBarTranslucent
      style={styles.modal}>

      <View style={styles.containerModal}>
        <ImageViewer
          style={{ width: SIZES.WIDTH_WINDOW }}
          imageUrls={url}
          enableSwipeDown={true}
          saveToLocalByLongPress={false}
          onSwipeDown={() => setVisible(false)}
          failImageSource={{
            url: "",
            props: { source: IMAGE.PLACEHOLDER }
          }}
        />

        <TouchableOpacity style={styles.btnClose} onPress={close}>
          <Icon name="close" style={styles.icClose} type={"FontAwesome"} />
        </TouchableOpacity>
      </View>


    </Modal>
  );
});

function mapStateToProps(state: any) {
  return {
    color: state.controlApp.settings.color.MODAL_IMAGE
  };
}

export default connect(mapStateToProps, null, null, { forwardRef: true })(ModalImage);
