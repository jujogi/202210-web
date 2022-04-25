import { db, auth } from "./app";
import { login, createUser, addUserToDatabase } from "./functions/auth";

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
