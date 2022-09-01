import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signOut as firebaseSignOut,
  GoogleAuthProvider,
} from 'firebase/auth';
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  QuerySnapshot,
} from 'firebase/firestore';
import { Post } from '../../state/posts/posts.reducer';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export const signInWithGooglePopup = async () =>
  await signInWithPopup(auth, googleProvider);

export const signOut = async () => await firebaseSignOut(auth);

export const getPosts = async (): Promise<Post[]> => {
  const posts = (await getDocs(collection(db, 'posts'))) as QuerySnapshot<Post>;

  return posts.docs.map((post) => ({ id: post.id, ...post.data() }));
};

export const addPost = async (payload: Post) => {
  await addDoc(collection(db, 'posts'), payload);
};
