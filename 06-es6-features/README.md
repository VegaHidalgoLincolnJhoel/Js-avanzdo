# Características Modernas de JavaScript (ES6+)

Temas cubiertos en esta sección:

- Arrow functions
- Template literals
- Destructuring (arrays y objetos)
- Spread y Rest operators
- Parámetros por defecto
- Módulos (`import` / `export`)
- Clases
- `Map`, `Set`, `WeakMap`, `WeakSet`
- Símbolos (`Symbol`)
- Generators e iteradores
- Optional chaining (`?.`) y Nullish coalescing (`??`)

## Ejemplos rápidos

```js
// Destructuring
const { nombre, edad = 18 } = { nombre: 'Ana' };
console.log(nombre, edad); // Ana 18

// Spread
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

// Optional chaining
const usuario = null;
console.log(usuario?.perfil?.avatar ?? 'Sin avatar'); // Sin avatar

// Arrow function
const cuadrado = (n) => n * n;
console.log(cuadrado(5)); // 25
```

## Archivos

Sube aquí tus ejercicios y tareas relacionados con las características modernas de JS.
