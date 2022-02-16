# 🖼 CSS Layout 

## 📐 Organización
- `margin`
- `padding`
- `box-sizing`
- `position`
- `display`

### margin (top, right, bottom, left)
- Controla el espacio alrededor del elemento
    - `10px` (10px en todas las direcciones)
    - `10px 20px` (10px arriba y abajo; 20px en ambos lados)
    - `10px 20px 25px` (10px arriba, 20px en ambos lados, 25px abajo)
    - `10px 20px 25px 30px` (manecillas del reloj)

### padding (top, right, bottom, left)
- Controla el espacio dentro del elemento
    - `10px` (10px en todas las direcciones)
    - `10px 20px` (10px arriba y abajo; 20px en ambos lados)
    - `10px 20px 25px` (10px arriba, 20px en ambos lados, 25px abajo)
    - `10px 20px 25px 30px` (manecillas del reloj)

### box-sizing
- Calcular el tamaño total de un elemento
    - `border-box` Toma en cuenta el padding y el borde de un elemento como parte de su tamaño
    - `content-box` El padding y el borde suman al tamaño del elemento

### position
- Específica la posición de un elemento
    - `static` Valor por defecto
    - `relative` Posición relativa al contenedor
    - `absolute` El elemento se posiciona en base al primer elemento en posición *relativa*
    - `fixed` Posición relativa a la pantalla del navegador
- Propiedades para modificar la posición: `top | right | bottom | left` 

### display
- Específica el comportamiento de un elemento
    - `block` (Ocupa el 100% disponible de su contenedor) `header, section, h1, p, footer`
    - `inline` (Se comporta como texto)
    - `inline-block` (Apilar objetos horizontalmente)
    - `none` (Oculta el elemento)
    - `flex` (Módulo de CSS) 💚
