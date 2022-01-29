import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

async function sendFeedback(feedback:object) {
  firestore()
    .collection("Feedbacks")
    .add({ ...feedback, userId: auth().currentUser?.uid, time: new Date()})
    .then(() => {
      console.log("Feedback added!");
    });
}

export const FeedbackServices = {
  sendFeedback
};
