# 🤖 Funciones

## ¿Qué es una función?

- Instrucciones que realizan una tarea.
- Nos ayudan a organizar y optimizar nuestro código.
- Reciben una entrada (input) y nos retornan un valor (output).
- El nombre de nuestras funciones no deben tener espacios y utilizar el standard `camelCase`

---

## ¿Cómo definir una función?
- Es necesario iniciar con la palabra reservada `function`.
- Añadir el nombre de nuestra función: `sendAlert` y después un paréntesis `()`.
- En los paréntesis pueden ir los `parámetros` que recibe nuestra función: (`message`); en caso de necesitarlos, es opcional.
- La función termina con llaves `{}`

```
function sendAlert(message) {
    const customMessage = "Alert: " + message;
    console.log(customMessage);
}
```

## ¿Cómo ejecutar una función?
- Una vez nuestra función ha sido definida, ya podemos llamarla por su nombre: `sendAlert`
- Para que la función se ejecute, debemos añadirle los paréntesis: `sendAlert();`
- En caso de que la función reciba parámetros, es necesario pasárselos: `sendAlert('Welcome to Javascript!');`

```
sendAlert('Javascript functions');
Output: "Alert: Javascript functions"
```

## Parámetros
- Una función puede recibir cualquier número y tipo de parámetros (`numbers`, `booleanos`, `arrays`, `objects`);

## Devolución de valores
- Existen ciertas funciones que deben realizar un cálculo matemático y retornar el resultado. En ese caso debemos utilizar la palabra reservada `return`.

```
function sum (num1, num2) {
    return num1 + num2;
}

sum(5+2);
output: 7
```

## Ejercicio
- Crear un archivo `calculator.js` donde existan 4 funciones: `sum`, `substract`, `multiply` y `divide`.
- Cada función debe recibir 2 números (`parámetros`) y dependiendo de su nombre, realizará un procedimiento.
- Llamar cada función y comprobar que la lógica dentro de ella esté funcionando bien.
- Utilizar dichas funciones para sumar, restar, multiplicar o dividir los valores del siguiente arreglo: `[10, 5, 30, 25]`. Los resultados deben ser los siguientes:
    - `sum` -> 30
    - `substract` -> -10
    - `multiply` -> 750
    - `divide` -> 0.13333333333333333