// Logica de la app

// Obtener Username

// data_get =[];

// function get_form() {

//      const get_form = Document.forms['formulario'];

//      const data_form = {
//           "username" : get_form.elements[0].value,
//           "name1" : get_form.elements[1].value,
//           "edad1" : get_form.elements[2].value,
//           "name2" : get_form.elements[3].value,
//           "edad2" : get_form.elements[4].value,
//      };

//      data_get.push(data_form);
//      get_form.reset();
//      get_form.elements[0].focus();
     
//      Document.write(get_form);
// }

// Obtener form
const get_form = document.querySelector("#id_formulario");

// Crear evento submit
get_form.addEventListener("submit", validarForm);

// Funciones

function validarForm(e){
     
     e.preventDefault();

     const username = document.querySelector("#username").value
     const name1 = document.querySelector("#name1").value
     const edad1 = document.querySelector("#edad1").value
     const name2 = document.querySelector("#name2").value
     const edad2 = document.querySelector("#edad2").value

     // const img2 =document.querySelector("#img2").value

     const img2 = foto.src("#img2");

     document.write(src"img");
     
}


// document.write(img2);

// console.log(get_form);


