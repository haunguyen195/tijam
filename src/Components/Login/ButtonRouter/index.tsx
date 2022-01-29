import React, { FC, forwardRef, memo, useCallback, useImperativeHandle, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import styleScaled from "./style";
import Icon from "../../BaseComponents/Icon";
import { moderateScale } from "react-native-size-matters";
import { SHADOW_3 } from "../../../Utils/Values";

const ButtonRouter: FC<any> = forwardRef((props, ref) => {
  const { color, onPressNext, onPressPre } = props;
  const styles = styleScaled(color);

  const [currentStep, setCurrentStep] = useState(0);

  useImperativeHandle(
    ref,
    () => ({
      setStep(step: number) {
        setCurrentStep(step);
      }
    })
  );

  const onPressToNext = useCallback(() => {
      onPressNext(currentStep);
  }, [currentStep]);

  const onPressToPre = useCallback(() => {
    onPressPre(currentStep);
  }, [currentStep]);

  return (
    <View style={styles.viewTouch}>
      <View style={{ width: "25%" }} />

      {currentStep == 0 ?
        <View style={{ width: "25%" }} /> :
        <TouchableOpacity
                          onPress={onPressToPre}
                          style={[styles.touchNext, { backgroundColor: color.BG_BTN_PRE }]}>

          <Icon type={"MaterialIcons"} name={"keyboard-arrow-left"} size={moderateScale(33, 0.3)}
                color={color.IC_BTN_PRE} />
        </TouchableOpacity>}

      <TouchableOpacity
                        onPress={onPressToNext}
                        style={[styles.touchNext, { ...SHADOW_3 }]}>
        <Icon type={"MaterialIcons"} name={"keyboard-arrow-right"} size={moderateScale(33, 0.3)} color={color.IC_BTN_NEXT} />
      </TouchableOpacity>
    </View>
  );
});

export default memo(ButtonRouter);
