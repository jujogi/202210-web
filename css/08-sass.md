# 🎨 SASS
🦸🏻 ¡Es CSS con superpoderes! 🦸🏽‍♂️

## ¿Cómo empezar?
- [SASS](https://sass-lang.com/)
- [SASS Compiler VSCode](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)
- La extensión de nuestros archivos deben ser `.scss`.

## ¿Qué puedo hacer con SASS?
- `Variables`: Puedo utilizar variables para guardar colores, fuentes y tamaños.
- `Nesting`: Podemos agrupar elementos (clases & ids).
- `Mixins`: Crear "funciones" que retornan estilos comunes (clases utilitarias).


### Variables
```
$main-font: Helvetica, sans-serif;
$dark-gray: #1a1a1a;

h1.title {
    font-family: $main-font;
    color: $dark-gray;
}
```

### Nesting
```
/* Input: */
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}

/* Output: */
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

```
### Mixins
```
@mixin title($color: green) {
  font-size: 20px;
  color: $color;
}

h1.title {
    @include title(red);
}

```