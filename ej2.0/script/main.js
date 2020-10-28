
//Funcionalidad botón exportar
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
    $('#registro')[0].reset();
  });
});

//Añado las expresiones regulares para el NIA
$(function(){
});

//Validación del form registro
$(function(){
  $("#registro").validate({
    rules : {
      usuario: {
        required: true
      },
      NIA: {
        required: true,
        number: true,
        pattern: /^(100)([0-9]{6})$/
      },
      contraseña: {
        required: true,
        pattern:/\w*\d/,
        maxlength: 8
      },
      nombre: {
        required: true
      },
      apellido1: {
        required: true
      },
      apellido2: {
        required: true
      },
      email: {
        required: true
      },
      fechaNacimiento: {
        requried: true
      },
      DNI: {
        required: true
      },
      rols: {
        required: true
      },
      condiciones: {
        required: true
      }
    }
  });
});
//Abrir email cliente
function enviarMensaje(mail) {
  window.open("mailto:" + mail)
}

// Calendario 

var Event = function (text, className) {
  this.text = text;
  this.className = className;
};

var events = {};
events[new Date("11/11/2020")] = new Event("Presentación Cohetes", "green");
events[new Date("11/06/2020")] = new Event("Examen 3 FA", "yellow");
events[new Date("11/04/2020")] = new Event("IPM Entrega Práctica Final", "green");

console.dir(events);

$(function () {
  $("#calendar").datepicker({
      showButtonPanel:true,
      currentText: "Hoy",
      beforeShowDay: function (date) {
          var event = events[date];
          if (event) {
              return [true, event.className, event.text];
          }
          else {
              return [true, '', ''];
          }
      }
  });
})



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

