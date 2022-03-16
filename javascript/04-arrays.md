# 🌐 Arreglos

## ¿Qué es un arreglo?
- Es una colección ordenada de elementos no homogéneos (cada elemento puede ser de un tipo de dato diferente).
- Se inicializan con corchetes `[]`.
- En javascript y en la mayoría de lenguajes de programación, los arreglos empiezan con el índice `0`.
- Proporcionan métodos para efectuar operaciones de recorrido (loops) y mutaciones.

## Generalidades

```
const todoList = [
    "Bañarme", 0
    "Desayunar", 1
    "Estudiar", 2
    "Ir a cine", 3
];
```

### Conocer el tamaño de mi arreglo
```
todoList.length (4)
```

### Acceder a un elemento
```
todoList[0] ("Bañarme")
todoList[todoList.length - 1] ("Ir a cine")
```

### Encontrar el índice de un elemento
```
todoList.indexOf("Estudiar") (2)
```

### Añadir un elemento al final
```
todoList.push("Dormir");
```
