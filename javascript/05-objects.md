# 🌐 Objetos

## ¿Qué es un Objeto?
- Es una colección de propiedades.
- El concepto de Objetos en JavaScript se puede entender con objetos tangibles de la vida real. (Un producto, un usuario).
- Cada propiedad es definida por una llave (`key`) y un valor (`value`).
- Se inicializan con llaves `{}`.

## Generalidades

```
const user = {
    name: "Marco",
    age: 34,
    hobbies: ["Fútbol", "Ciclismo"],
    single: false,
};
```

### Acceder a 'x' propiedad
```
user.name ("Marco")
```

### Añadir una nueva propiedad
```
user.birthday = "01/01/2000";
```

### Destructuración de Objetos
```
const { name } = user;
name ("Marco")
```