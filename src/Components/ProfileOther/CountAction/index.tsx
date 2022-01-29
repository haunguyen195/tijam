import React, { FC, memo } from "react";
import { Text, View } from "react-native";
import styleScaled from "./style";
import { numberHelpers } from "../../../Utils/Helpers";
import { UserInfor } from "../../../Models";

interface Props {
  color: any,
  userInfor:UserInfor|undefined,
  language:object
}

const CountAction: FC<Props> = (props) => {
  const { color, userInfor, language } = props;
  const styles = styleScaled(color);

  return (
    <View style={styles.container}>
      <View style={styles.containerCount}>

        {/*follow*/}
        <View style={styles.viewCount}>
          <Text style={styles.textCount}>{userInfor?numberHelpers(Math.floor(Math.random() * 2000000),language):'...'}</Text>
          <Text style={styles.textTitle}>{language.FOLLOW}</Text>
        </View>

        <View style={styles.viewStroke} />

        {/*notice*/}
        <View style={styles.viewCount}>
          <Text style={styles.textCount}>{userInfor?numberHelpers(Math.floor(Math.random() * 10000000),language):'...'}</Text>
          <Text style={styles.textTitle}>{language.ATTENTION}</Text>
        </View>

        <View style={styles.viewStroke} />

        {/*share*/}
        <View style={styles.viewCount}>
          <Text style={styles.textCount}>{userInfor?numberHelpers(Math.floor(Math.random() * 500000),language):'...'}</Text>
          <Text style={styles.textTitle}>{language.SHARE}</Text>
        </View>

      </View>
    </View>

  );
};
export default memo(CountAction);
