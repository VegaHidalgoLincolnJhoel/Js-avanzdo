# Scope y Closures

Temas cubiertos en esta sección:

- Scope global, de función y de bloque
- `var`, `let` y `const`
- Hoisting
- Clausuras (closures)
- IIFE (Immediately Invoked Function Expressions)

## Ejemplo básico de closure

```js
function crearContador() {
  let cuenta = 0;
  return function () {
    cuenta++;
    return cuenta;
  };
}

const contador = crearContador();
console.log(contador()); // 1
console.log(contador()); // 2
console.log(contador()); // 3
```

## Archivos

Sube aquí tus ejercicios y tareas relacionados con scope y closures.
