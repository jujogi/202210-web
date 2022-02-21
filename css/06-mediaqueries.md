# 🖼 Media queries

## ¿Para qué sirven?
- Modificar la apariencia de nuestra página web en función del dispositivo en el que es visitada.
- Las páginas no estaban optimizadas, dificultando su visualización en dispositivos móviles.

---

## ¿Cómo entender qué es un media querie?
"Cuando visiten mi página desde un celular o tableta, quiero reducir el tamaño de mi título (font-size) de 30px a 15px."

## Estructura
- `@media [MEDIA_TYPE] [MEDIA_FEATURE] [OPERATOR] [MEDIA_FEATURE]`
- `@media all (min-width: 320px) and (max-width: 768px)`

---

## Media Types
- `all`: Apto para todos los dispositivos
- `screen`: Aplicaría solo a las pantallas
- `print`: Previsualización de descarga (archivos PDF)
- `speech`: Sintetizadores de voz 

## Media Features
`max-width, min-width, max-height, min-height, width, height, aspect-ratio, orientation, resolution`, scan, grid, update, overflow-block, overflow-inline, color, color-gamut, color-index, display-mode, monochrome, inverted-colors, pointer, hover, any-pointer, any-hover, light-level, scripting

## Operators
- and
- or 
- not

---

## Ejemplo
```
@media all and (min-width: 768px) and (max-width: 1024px) {
    /* Cuando mi página esté entre 768px y 1024px */
    .main__title {
        font-size: 15px;
    }
}
```

```
@media all and (max-width: 1340px) {
    /* Cuando mi página sea menor o igual a 1340px */
    .container {
        width: 100%;
    }
}
```
---