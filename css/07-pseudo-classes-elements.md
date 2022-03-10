# 🗂 Pseudo Classes
Especifica un estado especial del elemento seleccionado.


```
selector:pseudoClase { propiedad: valor; }
```

- pseudo Clases: `:hover :focus :active :first-child :last-child :nth-child :checked :visited`
    - `hover`: Cuando el usuario se posiciona sobre el elemento
    - `focus`: Cuando el usuario hace clic en un input de un formulario
    - `active`: Cuando el usuario hace click en un enlace o botón
    - `first-child`: Selecciona el primer elemento de un grupo
    - `last-child`: Selecciona el último elemento de un grupo
    - `:nth-child`: Selecciona uno o más elementos según una condición:
        - `:nth-child(odd)`: Selecciona los elementos en posición impar
        - `:nth-child(even)`: Selecciona los elementos en posición par
        - `:nth-child(5n)`: Selecciona los elementos 5, 10, 15, etc...
        - `:nth-child(3n+4)`: Selecciona los elementos 4, 7, 10, 13, etc...
    - `:checked`: Cuando el usuario elige alguna opción del form (checkbox - option)
    - `:visited`: Cuando el usuario ha visitado un enlace

 ---

# 📘 Pseudo Elements

No describen un estado especial sino que, permiten añadir estilos a una parte concreta del documento.

```
selector::pseudoElemento { propiedad: valor; }
```

- pseudo Elementos: `::before ::after`