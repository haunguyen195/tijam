import storage from "@react-native-firebase/storage";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import { UserInfor } from "../../Models";
import moment from "moment";

interface UserInforAction {
  type: any,
  userInfor: UserInfor
}

interface UploadAvatarAction {
  type?: any,
  path: string,
  name: string
}

function* uploadAvatar({ path, name }: UploadAvatarAction) {
  let res = {
    error: null,
    downloadUrl: null
  };
  const referenceAvatar = storage().ref("images/avatars/" + name + ".jpg");

  const task = referenceAvatar.putFile(path);

  yield task.then(async () => {
    // @ts-ignore
    res.downloadUrl = await referenceAvatar.getDownloadURL();
  })
    .catch((reason) => {
      res.error = reason;
    });

  return res;
}

async function uploadThumbnail({ path, name }: UploadAvatarAction) {
  let res = {
    error: null,
    downloadUrl: null
  };
  const referenceThumbnail = storage().ref("images/thumbnails/" + name + ".jpg");

  const task = referenceThumbnail.putFile(path);

  await task.then(async () => {
    // @ts-ignore
    res.downloadUrl = await referenceThumbnail.getDownloadURL();
  })
    .catch((reason) => {
      res.error = reason;
    });

  return res;
}

function* setInfor({ userInfor }: UserInforAction) {

  firestore()
    .collection("Users")
    .doc(auth().currentUser?.uid)
    .set(userInfor)
    .then(() => {
      console.log("User added!");
    });

  firestore()
    .collection("UserLites")
    .doc(auth().currentUser?.uid)
    .set({
      id: userInfor.id,
      nickname: userInfor.nickname,
      name: userInfor.name,
      thumbnail: userInfor.thumbnail,
      gender: userInfor.gender
    })
    .then(() => {
      console.log("UserLite added!");
    })
    .catch(e => console.log(e));

  let durationCreateTS = moment.duration(moment(new Date()).diff(moment(userInfor.create_ts))).asHours();

  if (durationCreateTS < 0.1)
    firestore()
      .collection("Statistics")
      .doc("counter")
      .get()
      .then((querySnapshot) => {
        let data = querySnapshot.data();
        firestore()
          .collection("Statistics")
          .doc("counter")
          .update({ b_user: data.b_user + 1 })
          .then(() => {
            console.log("Statistics b_user updated!");
          });
      });
}

function* updateInfor({ userInfor }: UserInforAction) {
  firestore()
    .collection("Users")
    .doc(auth().currentUser?.uid)
    .update(userInfor)
    .then(() => {
      console.log("User updated!");
    });

  if (userInfor.name)
    firestore()
      .collection("UserLites")
      .doc(auth().currentUser?.uid)
      .update({ name: userInfor.name })
      .then(() => {
        console.log("UserLite updated!");
      });

  if (userInfor.thumbnail)
    firestore()
      .collection("UserLites")
      .doc(auth().currentUser?.uid)
      .update({ thumbnail: userInfor.thumbnail })
      .then(() => {
        console.log("UserLite updated!");
      });

  if (userInfor.gender)
    firestore()
      .collection("UserLites")
      .doc(auth().currentUser?.uid)
      .update({ gender: userInfor.gender })
      .then(() => {
        console.log("UserLite updated!");
      });
}

async function getUserInfor(id: String) {
  let data = await firestore()
    .collection("Users")
    .doc(id)
    .get();

  let userData = { ...data.data() };
  userData.create_ts = data.data().create_ts.toDate();
  userData.dob = data.data().dob?.toDate() || null;
  userData.posts = data.data().posts.map((item) => {
    return { ...item, create_ts: item.create_ts.toDate() };
  });

  return userData;
}

export async function checkNickname(nickname: string): Promise<boolean> {
  return firestore()
    .collection("Users")
    .where("nickname", "==", nickname)
    .get()
    .then((querySnapshot) => {
      return querySnapshot.size > 0;
    });
}

export async function getAllUser() {
  return await firestore()
    .collection("UserLites")
    .get()
    .then((querySnapshot) => {
      return querySnapshot.docs.map(item => item.data());
    });
}

export const UserServices = {
  uploadAvatar,
  uploadThumbnail,
  setInfor,
  updateInfor,
  checkNickname,
  getUserInfor,
  getAllUser
};
