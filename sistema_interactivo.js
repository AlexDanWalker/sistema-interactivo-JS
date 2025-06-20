// Mensaje inicial en la consola
console.log("¡Bienvenido al Sistema Interactivo de Mensajes!");

// Declaración de variable nombre
let nombre;

// Validación del nombre (no vacío ni solo espacios)
do {
  nombre = prompt("Por favor, ingresa tu nombre:"); // Solicita el nombre al usuario
  if (nombre === null || nombre.trim() === "") {
    alert("El nombre no puede estar vacío."); // Alerta si el campo está vacío o cancelado
    console.error("Error: El nombre ingresado está vacío."); // Muestra el error en consola
  }
} while (nombre === null || nombre.trim() === "");

nombre = nombre.trim(); // Elimina espacios en blanco antes y después del nombre

// Declaración de variable edad
let edad;

// Solicita y valida la edad del usuario
do {
  edad = prompt("Por favor, ingresa tu edad:"); // Solicita la edad

  // Verifica si la edad está vacía o fue cancelada
  if (edad === null || edad.trim() === "") {
    alert("La edad no puede estar vacía."); // Alerta si no se ingresó nada
    console.error("Error: La edad no puede estar vacía."); // Muestra el error en consola
    edad = NaN; // Fuerza que el ciclo se repita
    continue;   // Salta a la siguiente iteración del ciclo
  }

  edad = parseInt(edad); // Convierte la edad a número entero

  // Verifica si la edad ingresada no es un número o es negativa
  if (isNaN(edad) || edad < 0) {
    alert("Edad inválida. Debes ingresar un número válido y no negativo."); // Mensaje de alerta
    console.error("Error: Se debe ingresar una edad válida en números."); // Mensaje de error en consola
  }

} while (isNaN(edad) || edad < 0); // Repite el ciclo mientras la edad sea inválida

// Mensaje final según la edad ingresada
if (edad < 18) {
  alert(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
} else {
  alert(`Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
}
