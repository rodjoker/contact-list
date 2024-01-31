/*Crea una lista de contactos con datos predefinidos, 
cada contacto debe contener el nombre y apellido como 
una sola cadena de caracteres*/

console.log("-----Lista_de_contactos-----")
let contactos = [
    {
      id: "Rod",
      nombres: "Rodolfo Antonio",
      apellidos: "Rodriguez Quintero",
      telefono: +584144991902,
      ubicaciones: "Venezuela Distrito Capital",
      ciudad: "Caracas",
      direccion: "calle primera casa 24"
    }
]
console.log(contactos[0])
console.log ("-----Agregar_Contacto-----")

/*Crea una función para añadir un nuevo contacto a una lista*/

function agregarContacto (id, nombres, apellidos, telefono, ubicaciones, ciudad, direccion){
      let nuevo ={
          id: id,
          nombres: nombres,
          apellidos:apellidos,
          telefono: telefono,
          ubicaciones: {
              ciudad: ciudad,
              direccion: direccion
          }
      }
      contactos.push (nuevo);
      
      console.log (nuevo);
      console.log (contactos);
    }
/*Crea una función para imprimir en consola los 
contactos presentes en la lista*/

      
/* ahora voy a llamar a la funcion e ingresar los datos*/

agregarContacto ("AN", "Ana Maria", "Gutierres Alarcon", +5694423248,"Chile Region Metropolitana", "Santiego", "Peñaflor Casa tercera");
agregarContacto ("Lis", "lisset Alejandra", "Vargas Salas", +5074423987, "Panama", "CIudad de Panama", "Colon", "Coloncito casa uno");
agregarContacto ("Mat", "Matias Jose","Arevalo Arrieta", +584129446578,"Venezuela Vargas", "La Guira", "Los Corales Casa once");



/*Crea una función para borrar un contacto existente de la lista*/
contactos.pop();


/* Ajusta las funciones de crear y eliminar un contacto para que 
puedan almacenar la siguiente información como objetos:
id,  nombres,  apellidos,  teléfono,  ubicaciones,  ciudad,  dirección */