import { db } from "../app";
import { doc, getDoc } from "firebase/firestore";

async function getProduct(id) {
    const docRef = doc(db, "products", id);
    try {
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
    
        return data; 
    } catch(e) {
        console.log(e);
    }
}

export {
    getProduct
}