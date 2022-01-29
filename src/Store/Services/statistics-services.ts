import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

async function getStatistics() {
  return await firestore()
    .collection("Statistics")
    .doc('counter')
    .get();
}

export const StatisticsServices = {
  getStatistics
};
