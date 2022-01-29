import firestore from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";
import { distanceBetween, geohashQueryBounds } from "geofire-common";
import auth from "@react-native-firebase/auth";
import { KEY_COUNTER_TYPE } from "../../Utils/Values";
import { Post } from "../../Models";
import moment from "moment";

const radiusInM = 1500;

function* uploadPost(newPost: Post) {

  firestore()
    .collection("Posts")
    .doc(newPost.id)
    .set(newPost)
    .then(() => {
      console.log("Post added!");
    });

  firestore()
    .collection("Statistics")
    .doc("counter")
    .get()
    .then((querySnapshot) => {
      let data = querySnapshot.data();
      firestore()
        .collection("Statistics")
        .doc("counter")
        .update({ a_post: data.a_post + 1, [KEY_COUNTER_TYPE[newPost.type]]: data[KEY_COUNTER_TYPE[newPost.type]] + 1 })
        .then(() => {
          console.log("Statistics a_post updated!");
        });
    });

  yield fetch(`https://api.opencagedata.com/geocode/v1/json?q=${newPost.latitude}+${newPost.longitude}&key=2026d938ce4f4512bf9aef254f93733b`)
    .then(response => response.json())
    .then((dataLocation) => {
      if (dataLocation.status.code === 200) {
        firestore()
          .collection("Statistics")
          .doc("counter")
          .get()
          .then((querySnapshot) => {
            let data = querySnapshot.data();
            if (!data.c_country.includes(dataLocation.results[0].components["ISO_3166-1_alpha-3"])) {
              data.c_country.push(dataLocation.results[0].components["ISO_3166-1_alpha-3"]);

              firestore()
                .collection("Statistics")
                .doc("counter")
                .update({ c_country: data.c_country })
                .then(() => {
                  console.log("Statistics c_country updated!");
                });
            }
          });
      }
    });
}

function* updateThumbnailInPosts(urlThumbnail) {

  firestore()
    .collection("Posts")
    .where("userId", "==", auth().currentUser?.uid)
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        firestore()
          .collection("Posts")
          .doc(doc.id)
          .update({ avatar: urlThumbnail })
          .then(() => {
            console.log("Post thumbnail updated!");
          });
      });
    });
}

function* uploadImage(path, name) {
  let res = {
    error: null,
    downloadUrl: null
  };
  const referenceImage = storage().ref("images/posts/" + name + ".jpg");

  const task = referenceImage.putFile(path);

  yield task.then(async () => {
    // @ts-ignore
    res.downloadUrl = await referenceImage.getDownloadURL();
  })
    .catch((reason) => {
      res.error = reason;
    });

  return res;
}

function* getPostsByLocation(location: any[]) {

  const bounds = geohashQueryBounds(location, radiusInM);
  const matchingPosts: any[] = [];

  const promises = [];
  for (const b of bounds) {
    const q = yield firestore().collection("Posts")
      .orderBy("geohash")
      .startAt(b[0])
      .endAt(b[1]);

    promises.push(q.get());
  }

  yield Promise.all(promises).then((snapshots) => {

    for (const snap of snapshots) {
      for (const doc of snap.docs) {
        const lat = doc.get("latitude");
        const lng = doc.get("longitude");
        const create_ts = doc.get("create_ts");

        // We have to filter out a few false positives due to GeoHash
        // accuracy, but most will match
        const distanceInKm = distanceBetween([lat, lng], location);
        const distanceInM = distanceInKm * 1000;
        if (distanceInM <= radiusInM) {
          matchingPosts.push({ ...doc.data(), distance: distanceInM, create_ts: create_ts.toDate() });
        }
      }
    }

  });

  return matchingPosts;
}

async function deleteOldPost() {
  firestore()
    .collection("Posts")
    .where("duration", "<=", moment(new Date()).toDate())
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.forEach(async (doc) => {
        await deletePost(doc);
      });
    });
}

async function deletePost(post: Post) {
  firestore()
    .collection("Posts")
    .doc(post.id)
    .delete();

  if (post.image_height) {
    const referenceImage = storage().ref("images/posts/" + post.id + ".jpg");
    referenceImage.delete();
  }
}

export const PostServices = {
  uploadPost,
  uploadImage,
  getPostsByLocation,
  updateThumbnailInPosts,
  deleteOldPost,
  deletePost
};
