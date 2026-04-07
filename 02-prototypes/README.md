# Prototipos y Herencia

Temas cubiertos en esta sección:

- Cadena de prototipos (`__proto__` y `prototype`)
- `Object.create()`
- Herencia prototípica
- Clases ES6 y su relación con prototipos
- `hasOwnProperty`, `instanceof`

## Ejemplo básico de herencia prototípica

```js
function Animal(nombre) {
  this.nombre = nombre;
}

Animal.prototype.hablar = function () {
  console.log(`${this.nombre} hace un sonido.`);
};

function Perro(nombre) {
  Animal.call(this, nombre);
}

Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.constructor = Perro;

Perro.prototype.hablar = function () {
  console.log(`${this.nombre} ladra.`);
};

const d = new Perro('Rex');
d.hablar(); // Rex ladra.
```

## Archivos

Sube aquí tus ejercicios y tareas relacionados con prototipos y herencia.
