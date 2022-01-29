import React, { FC } from "react";
import { Text, View } from "react-native";
import Icon from "../Icon";
import styleScaled from "./style";
import { connect } from "react-redux";

const EmptyView: FC<any> = ({ description, color }) => {

  const styles = styleScaled(color);

  return (
    <View style={styles.container}>
      <Icon type={"Octicons"} name={"inbox"} style={styles.icon} />
      <Text style={styles.txt}>{description}</Text>
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    color: state.controlApp.settings.color.EMPTY_VIEW
  };
}

export default connect(mapStateToProps)(EmptyView);
