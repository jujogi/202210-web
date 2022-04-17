// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1XW4ii1IPPD8P8MTd_QLoYvZGFxs4z5M",
  authDomain: "icesi-shop-7f00a.firebaseapp.com",
  projectId: "icesi-shop-7f00a",
  storageBucket: "icesi-shop-7f00a.appspot.com",
  messagingSenderId: "874720817592",
  appId: "1:874720817592:web:c2634f56f84b162b625f4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const createUserForm = document.getElementById("createUserForm");
const loginForm = document.getElementById("loginForm");

createUserForm.addEventListener("submit", e => {
    e.preventDefault();

    const name = createUserForm.name.value;
    const email = createUserForm.email.value;
    const password = createUserForm.password.value;

    createUser(name, email, password);
});

loginForm.addEventListener("submit", e => {
    e.preventDefault();

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    login(email, password);
});

async function createUser(name, email, password) {
   try {
       const { user } = await createUserWithEmailAndPassword(auth, email, password);
       alert(`Bienvenido, usuario ${user.email}`);
   } catch(e) {

    if(e.code === "auth/weak-password") {
        alert("Tu contraseña debe tener al menos 6 caracteres");
    }

    if(e.code === "auth/email-already-in-use") {
        alert("Este correo ya se encuentra en uso");
    }
   }
}

async function login(email, password) {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        alert(`Bienvenido, usuario ${user.email}`);
    } catch(e) {
        alert("Correo o contraseña inválida :(");
    }
}