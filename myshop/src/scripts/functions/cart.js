import { getDoc, setDoc, doc } from "firebase/firestore"; 

async function createFirebaseCart(db, userId, cart) {
    try {
        await setDoc(doc(db, "cart", userId), {
            cart
        });
    } catch (e) {
        console.log(e);
    }
}

async function getFirebaseCart(db, userId) {
    const docRef = doc(db, "cart", userId);
    const docSnap = await getDoc(docRef);
    const result = docSnap.data();
    return (result) ? result.cart : [];
}

export {
    createFirebaseCart,
    getFirebaseCart
}