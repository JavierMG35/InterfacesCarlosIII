
//Funcionaldiad botón exportar
$(function(){
  $("#exportar").click(function(){
    $("#tabla_exportar").tableToCSV();
  });
});
//Para que aparezca el grado si la opción es estudiante
$(function(){
  $("#rols").change(function() {
    var val = $(this).val();
    if (val == "Estudiante"){
      $("#grado").show()
      $("#grado").html("<option value='' selected disabled>---Escoger un Grado---</option> <option value='Informatica'>Informatica</option> <option value='ADE'>ADE</option> <option value='Derecho'>Derecho</option>")
    } else {
      $("#grado").hide()
    }
  });
});

//para resetear el form
$(function(){
  $("#borrar").click(function(){
    $('.formulario')[0].reset();
  });
});
//Abrir email cliente
function enviarMensaje(mail) {
  window.open("mailto:" + mail)
}

function displayClases() {
    document.getElementsByClassName("clases")[0].style.display = "block"
    document.getElementsByClassName("forum")[0].style.display = "none"
    document.getElementsByClassName("calificaciones")[0].style.display = "none"
    document.getElementsByClassName("listado")[0].style.display = "none"
}

function displayStudents() {
    document.getElementsByClassName("clases")[0].style.display = "none"
    document.getElementsByClassName("forum")[0].style.display = "none"
    document.getElementsByClassName("calificaciones")[0].style.display = "none"
    document.getElementsByClassName("listado")[0].style.display = "block"
}

function displayForum() {
    document.getElementsByClassName("clases")[0].style.display = "none"
    document.getElementsByClassName("forum")[0].style.display = "block"
    document.getElementsByClassName("calificaciones")[0].style.display = "none"
    document.getElementsByClassName("listado")[0].style.display = "none"
}

function displayGrades() {
    document.getElementsByClassName("clases")[0].style.display = "none"
    document.getElementsByClassName("forum")[0].style.display = "none"
    document.getElementsByClassName("calificaciones")[0].style.display = "block"
    document.getElementsByClassName("listado")[0].style.display = "none"
}

