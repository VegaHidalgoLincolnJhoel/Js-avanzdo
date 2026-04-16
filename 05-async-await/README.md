# Async / Await

Temas cubiertos en esta sección:

- Funciones `async`
- Operador `await`
- Manejo de errores con `try / catch`
- Ejecución en paralelo con `Promise.all` y `await`
- Iteración asíncrona (`for await...of`)

## Ejemplo básico

```js
function obtenerProducto(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, nombre: 'Producto ' + id, precio: id * 10 });
      } else {
        reject(new Error('ID inválido'));
      }
    }, 300);
  });
}

async function mostrarProducto(id) {
  try {
    const producto = await obtenerProducto(id);
    console.log('Producto:', producto);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

mostrarProducto(3);
mostrarProducto(-1);
```

## Archivos

Sube aquí tus ejercicios y tareas relacionados con async/await.
