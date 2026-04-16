# Promesas (Promises)

Temas cubiertos en esta sección:

- Creación de promesas con `new Promise()`
- Estados: pending, fulfilled, rejected
- Encadenamiento con `.then()` y `.catch()`
- `.finally()`
- `Promise.all()`, `Promise.race()`, `Promise.allSettled()`, `Promise.any()`

## Ejemplo básico

```js
function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    if (id > 0) {
      resolve({ id, nombre: 'Usuario ' + id });
    } else {
      reject(new Error('ID inválido'));
    }
  });
}

obtenerUsuario(5)
  .then((usuario) => {
    console.log('Usuario:', usuario);
    return esperar(300);
  })
  .then(() => console.log('Listo después de esperar'))
  .catch((err) => console.error('Error:', err.message));
```

## Archivos

Sube aquí tus ejercicios y tareas relacionados con promesas.
