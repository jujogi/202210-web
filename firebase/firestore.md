# 📦 Firestore
Base de datos NoSQL flexible y escalable, con el fin de almacenar y sincronizar datos para el desarrollo tanto del lado del cliente como del servidor.

## ¿Cómo importarlo?
```
import { getFirestore } from "firebase/firestore";
const app = initializeApp(FIREBASE_CONFIG);
const db = getFirestore(app);
```

## 🔍 (GET) Leer recursos
### Leer un documento
- `doc`
- `getDoc`
```
import { doc, getDoc } from "firebase/firestore";
const docRef = doc(db, "NOMBRE_DE_LA_COLECCION", "IDENTIFICADOR_DEL_DOCUMENTO");
const docSnap = await getDoc(docRef);
const data = docSnap.data();
```

### Leer una colección con todos sus documentos
- `collection`
- `getDocs`
```
import { collection, getDocs } from "firebase/firestore";
const collectionRef = collection(db, "NOMBRE_DE_LA_COLECCION");
const { docs } = await getDocs(collectionRef);

docs.forEach((doc) => {
    console.log(doc.data());
});
```

## ➕ (POST/PUT) Agregar un documento
- `doc`
- `setDoc`


Con un ID definido...
```
import { doc, setDoc } from "firebase/firestore";
await setDoc(doc(db, "NOMBRE_DE_LA_COLECCION", "IDENTIFICADOR_DEL_DOCUMENTO"), {
    DATOS_A_GUARDAR (PROPIEDADES DE UN OBJETO)
});
```

Con un ID generado por Firebase...
```
await addDoc(collection(db, "NOMBRE_DE_LA_COLECCION"), {
    DATOS_A_GUARDAR (PROPIEDADES DE UN OBJETO)
});
```

## 🗑 (DELETE) Eliminar un documento
```
import { doc, deleteDoc } from "firebase/firestore";
await deleteDoc(doc(db, "NOMBRE_DE_LA_COLECCION", "IDENTIFICADOR_DEL_DOCUMENTO"));
```