/*Crea una lista de contactos con datos predefinidos, 
cada contacto debe contener el nombre y apellido como 
una sola cadena de caracteres*/


let contactos = [
    {
      nombreCompleto: "Rodolfo Rodriguez",
      edad: 36
    }
]

/*Crea una función para añadir un nuevo contacto a una lista*/

function agregarContacto (nombreCompleto, edad){
      let nuevo = {
          nombreCompleto: nombreCompleto,
          edad: edad
      }
      contactos.push (nuevo);
      
      console.log (nuevo);

/*Crea una función para imprimir en consola los 
contactos presentes en la lista*/

      console.log(contactos);
}
/* ahora voy a llamar a la funcion e ingresar los datos*/

agregarContacto ("Ana Gonzales", 28);
agregarContacto ("lisset Vargas", 32);
agregarContacto ("Matias Arevalo", 41);
agregarContacto ("Pilar Gutierrez", 35);

/*Crea una función para borrar un contacto existente de la lista*/
contactos.pop ();
