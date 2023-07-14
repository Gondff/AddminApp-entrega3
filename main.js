
//Crear la clase estudiante

class Estudiante{
    constructor (nombre, apellido, dni,comision){
        this.nombre = nombre;
        this.apellido =apellido;
        this.dni = dni;
        this.comision = comision;
    }
}
//Funcion con Operador ternario
function generarComision(estudiante) {
    let numDni = parseInt(estudiante.dni);
    estudiante.comision = numDni % 2 === 0 ? 43125 : 43150;
  }

//crear el array donde se guardan

let curso = [];

// Funcion para agregar estudiante
function agregarEstudiante() {
    let nombre = document.getElementById('Nombre').value;
    let apellido = document.getElementById('Apellido').value;
    let dni = parseInt(document.getElementById('DNI').value);
  
    if (!nombre || !apellido || !dni) {
      alert("Debe ingresar todos los datos del estudiante");
    } else {
      const nuevoEstudiante = new Estudiante(nombre, apellido, dni);
      generarComision(nuevoEstudiante);
  
      curso.push(nuevoEstudiante);
      alert("Se agregó correctamente el estudiante");
  
      // Reiniciar los campos del formulario
      document.getElementById('Nombre').value = "";
      document.getElementById('Apellido').value = "";
      document.getElementById('DNI').value = "";
    }
  }

  // Funcion para listar los estudiantes
function listarEstudiantes() {
    if (curso.length === 0) {
      alert("No hay estudiantes para mostrar");
    } else {
      const contenedorEstudiantes = document.getElementById('estudiantesContainer');
      contenedorEstudiantes.innerHTML = ''; // Limpiar el contenido del contenedor
  
      curso.forEach((estudiante) => {
        // Crea una card por estudiante
        const tarjeta = document.createElement('div');
        tarjeta.className = 'card text-bg-info mb-3';
        tarjeta.style = 'max-width: 18rem;';
  
        const tarjetaHeader = document.createElement('div');
        tarjetaHeader.className = 'card-header';
        tarjetaHeader.textContent = 'Estudiante';
  
        const tarjetaBody = document.createElement('div');
        tarjetaBody.className = 'card-body';
  
        const titulo = document.createElement('h5');
        titulo.className = 'card-title';
        titulo.textContent = `${estudiante.nombre} ${estudiante.apellido}`;
  
        const texto = document.createElement('p');
        texto.className = 'card-text';
        texto.textContent = `DNI: ${estudiante.dni}, Comisión: ${estudiante.comision}`;
  
        tarjetaBody.appendChild(titulo);
        tarjetaBody.appendChild(texto);
        tarjeta.appendChild(tarjetaHeader);
        tarjeta.appendChild(tarjetaBody);
  
        // Agrega las tarjetas al contenedor
        contenedorEstudiantes.appendChild(tarjeta);
      });
    }
  }
  
  

  

//Funcion para buscar estudiante por DNI
function buscarEstudiantePorDni(){
    let dniBuscado = parseInt(prompt("Ingrese el DNI que desea buscar"));

    let estudianteEncontrado = curso.find((estudiante) => estudiante.dni === dniBuscado);

    if(estudianteEncontrado){
        let datosDni = "Estudiante encontrado:\n\n";
        datosDni += `Nombre: ${estudianteEncontrado.nombre}\n`;
        datosDni += `Apellido: ${estudianteEncontrado.apellido}\n`;
        datosDni += `DNI: ${estudianteEncontrado.dni}\n`;
        datosDni += `Comision: ${estudianteEncontrado.comision}\n`;
        return alert(datosDni)
    }else{
        return alert("DNI no encontrado");
    }
}




