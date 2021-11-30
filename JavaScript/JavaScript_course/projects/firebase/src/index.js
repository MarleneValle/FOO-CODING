// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaQM6SU3_qaMipe0sGQSznYJMIKgxfEN8",
  authDomain: "fir-9-dojo-744c3.firebaseapp.com",
  projectId: "fir-9-dojo-744c3",
  storageBucket: "fir-9-dojo-744c3.appspot.com",
  messagingSenderId: "1059760164994",
  appId: "1:1059760164994:web:9321e1b5306111f4d6249b",
};
//init firebase app
initializeApp(firebaseConfig);

//init services
const db = getFirestore();
// collection ref
const colRef = collection(db, "books");
// get collection data, which returns a promise
getDocs(colRef)
  .then((snapshot) => {
    const books = [];
    snapshot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id });
    });
    console.log(books);
  })
  .catch((err) => {
    console.log(err.message);
  });

//adding documents
const addBookForm = document.querySelector(".add");
addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
  }).then(() => {
    addBookForm.reset();
  });
});

//deleting documents
const deleteBookForm = document.querySelector(".delete");
deleteBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const docRef = doc(db, "books", deleteBookForm.id.value);

  deleteDoc(docRef).then(() => {
    deleteBookForm.reset();
  });
});
