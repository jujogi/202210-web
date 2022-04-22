// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { login, createUser, addUserToDatabase } from "./functions/auth";
import firebaseConfig from "../utils/firebase";
// Your web app's Firebase configuration


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);


const createUserForm = document.getElementById("createUserForm");
const loginForm = document.getElementById("loginForm");

createUserForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = createUserForm.name.value;
    const email = createUserForm.email.value;
    const password = createUserForm.password.value;

    const userInfo = {
        name,
        email,
        password,
        isAdmin: false,
    };

    const newUser = await createUser(auth, userInfo);
    await addUserToDatabase(db, newUser.uid, userInfo);

    alert(`Bienvenido, ${name}`);
    // window.location.href = "/products.html";
});

loginForm.addEventListener("submit", e => {
    e.preventDefault();

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    login(auth, email, password);
});
