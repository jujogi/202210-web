# 🤔 Condicionales
En cualquier lenguaje de programación y en la vida en general, necesitamos tomar decisiones y realizar acciones basadas de un input.
- Si en mi cuenta bancaria no tengo dinero, no puedo comprar nada.
- Si las vidas de mi personaje llegan a cero, el juego se termina.
- Si no estoy registrado, no puedo añadir fotografías.

---

## Declaraciones (if & else)

Los condicionales utilizan los [operadores de comparación](https://github.com/jujogi/dmi-web/blob/master/javascript/docs/03-variables.md):
- `===`
- `!==`
- `&&`: (Y) - Definir 2 o más condiciones y se deben cumplir
- `||`: (O) - Si una de las 2 o más condiciones se cumplen

Condicional simple
```
if (condición) {
  código a ejecutar si la condición es verdadera
} else {
  ejecuta este otro código si la condición no se cumple
}
```


## Declaración (else if)
Lo utilizamos cuando necesitamos realizar más de 2 validaciones.
```
if (comida === 'carne') {
  console.log('Al usuario le gusta la carne');
} else if(condición === 'pollo') {
  console.log('Al usuario le gusta el pollo');
} else if(condición === 'pescado'){
    console.log('Al usuario le gusta el pescado');
} else {
    console.log('El usuario no tiene ninguna preferencia');
}
```

## Ejemplo cotidiano
Aplicación que verifica si el usuario ha verificado su cuenta mediante el correo electrónico
```
if (user.isActive === false) {
    console.log('Primero debes activar tu cuenta');
} else {
    console.log('Puedes iniciar sesión en la aplicación');
}
```