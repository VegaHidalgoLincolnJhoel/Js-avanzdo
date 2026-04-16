# Asincronía y Callbacks

Temas cubiertos en esta sección:

- El Event Loop de JavaScript
- Callbacks y patrones de uso
- Callback hell y cómo evitarlo
- `setTimeout` y `setInterval`
- Manejo de errores en callbacks (patrón Node.js error-first)

## Ejemplo de callback error-first

```js
function obtenerDatos(id, callback) {
  setTimeout(() => {
    if (id <= 0) {
      callback(new Error('ID inválido'), null);
    } else {
      callback(null, { id, nombre: 'Producto ' + id });
    }
  }, 500);
}

obtenerDatos(1, (err, datos) => {
  if (err) {
    console.error('Error:', err.message);
  } else {
    console.log('Datos:', datos);
  }
});
```

## Archivos

Sube aquí tus ejercicios y tareas relacionados con asincronía y callbacks.
