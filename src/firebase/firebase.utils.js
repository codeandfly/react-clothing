import firebase from 'firebase/app';
import 'firebase/firestore'; // our db
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB2xzg2-C7ufhjs9tOemdFhW7jyXjHQy44",
  authDomain: "crwn-corp.firebaseapp.com",
  databaseURL: "https://crwn-corp.firebaseio.com",
  projectId: "crwn-corp",
  storageBucket: "",
  messagingSenderId: "584338379682",
  appId: "1:584338379682:web:1101fed77ab7ba09"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log('additionalData', additionalData)

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData 
      })
    } catch (err) {
      console.log('error created user', err.message);
    }
  }
  
  return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc(); // let firestore set a unique key for each object
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

// Normalize data: Convert array of obj from Firestore into objects
export const convertCollectionsSnapToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {})
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// always trigger google popup whenever we use GoogleAuthProvider for authentication and signin
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;