import listsWishes from '../data/listWishes';
import * as firebase from 'firebase';

// export const GET_WISHES = 'GET_WISHES';
export const START_LOAD_WISHES = 'START_LOAD_WISHES';
export const FINISH_LOAD_WISHES = 'FINISH_LOAD_WISHES';
export const SAVE_WISH_TEXT = 'SAVE_WISH_TEXT';
export const SAVE_WISH = 'SAVE_WISH';

// export function getWishes() {
//   return {
//     type: GET_WISHES
//   };
// }
export function fetchWishes() {
  return async (dispatch) => {
    const db = firebase.firestore();
    console.log(db);
    let list = await db.collection('list').get();
    console.log(list);
    list.forEach(doc => {
      console.log(doc.id, '=>', doc.data().name);
    });

    //   .then((item) => {
    //     item.forEach((i) => {
    //       console.log(i);
    //     });
    //     item.forEach((doc) => {
    //       console.log(doc.id, '=>', doc.data());
    //     });
    //   });
    // db.collection("list").doc("ruAxDnbN6RITcoM0Vw3d")
    //   .onSnapshot(function(doc) {
    //     console.log("Current data: ", doc.data());
    //   });
    console.log(list);
    dispatch(startLoadWishes());
    setTimeout(() => dispatch(finishLoadWishes()), 2000);
  }
}
export function startLoadWishes() {
  return {
    type: START_LOAD_WISHES,
    loading: true,
    loaded: false
  };
}
export function finishLoadWishes() {
  return {
    type: FINISH_LOAD_WISHES,
    loading: false,
    loaded: true,
    listsWishes: listsWishes
  };
}
export function saveWishText(text, idWish, idList) {
  console.log('saveWishText');
  return {
    type: SAVE_WISH_TEXT,
    text,
    idWish,
    idList
  };
}
export function saveWish(wish, idWish, idList) {
  return {
    type: SAVE_WISH,
    wish,
    idWish,
    idList
  };
}


