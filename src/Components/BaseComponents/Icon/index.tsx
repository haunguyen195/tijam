import React, { FC, memo } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome5Pro from "react-native-vector-icons/FontAwesome5Pro";
import Fontisto from "react-native-vector-icons/Fontisto";
import Foundation from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Zocial from "react-native-vector-icons/Zocial";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

interface Props {
  type: string;
  name: string;
  [anotherProps:string]:any;
}

const Icon: FC<Props> = ({ type, name, ...anotherProps }) => {

  let icon;

  switch (type) {
    case "AntDesign":
      icon = <AntDesign name={name} {...anotherProps} />;
      break;
    case "Entypo":
      icon = <Entypo name={name} {...anotherProps} />;
      break;
    case "EvilIcons":
      icon = <EvilIcons name={name} {...anotherProps} />;
      break;
    case "Feather":
      icon = <Feather name={name} {...anotherProps} />;
      break;
    case "FontAwesome":
      icon = <FontAwesome name={name} {...anotherProps} />;
      break;
    case "FontAwesome5":
      icon = <FontAwesome5 name={name} {...anotherProps} />;
      break;
    case "FontAwesome5Pro":
      icon = <FontAwesome5Pro name={name} {...anotherProps} />;
      break;
    case "Fontisto":
      icon = <Fontisto name={name} {...anotherProps} />;
      break;
    case "Foundation":
      icon = <Foundation name={name} {...anotherProps} />;
      break;
    case "Ionicons":
      icon = <Ionicons name={name} {...anotherProps} />;
      break;
    case "MaterialIcons":
      icon = <MaterialIcons name={name} {...anotherProps} />;
      break;
    case "MaterialCommunityIcons":
      icon = <MaterialCommunityIcons name={name} {...anotherProps} />;
      break;
    case "Octicons":
      icon = <Octicons name={name} {...anotherProps} />;
      break;
    case "Zocial":
      icon = <Zocial name={name} {...anotherProps} />;
      break;
    case "SimpleLineIcons":
      icon = <SimpleLineIcons name={name} {...anotherProps} />;
      break;
    default:
      icon = <FontAwesome name={name} {...anotherProps} />;
  }
  return icon;
};

export default memo(Icon);
