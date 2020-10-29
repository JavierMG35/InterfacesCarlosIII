
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
        pattern:/(?=.?[0-9])(?=.?[a-z]).+/,
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
        required: true,
        pattern: /(\d{8})([-]?)([A-Z]{1})/,
        maxlength: 8
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

//Funcion para obtener los datos de un formulario y crear una cookie si se puede
$(function(){
  $("#registro").submit(function(){
    var cvalue = decodeURIComponent($("#registro").serialize());
    var cname = cvalue.split("&")[6].split("=")[1];
    var exdays = 30;
    if ($("#registro").valid()) {
      if(!getCookie(cname)) {
        setCookie(cname,cvalue,exdays);
      } else {
        window.alert("El email: " + cname + " ya está en uso prueba con otro");
      }
      
    } 
  });
});
//Funcion para obtener la contraseña de una cookie
function getContraseñaCookie(cname){
  var cvalue = getCookieValue(cname);
  var ccontraseña = cvalue.split("&")[2].split("=")[1];
  return ccontraseña;
}
//Funcion para obtener los datos del formulario de inicio de sesión e iniciar sesión si son correctos
  $(function(){
    $("#inicioSesion").submit(function(){
      var form = decodeURIComponent($("#inicioSesion").serialize());
      var cname = form.split("&")[0].split("=")[1];
      var contraseña = form.split("&")[1].split("=")[1];
      console.log("Cookies" + document.cookie);
      console.log(contraseña);
  
      if(getCookie(cname) && contraseña === getContraseñaCookie(cname)){
        console.log("Se ha iniciado sesión");
        return true
      }else{
        window.alert("Email o contraseña incorrectos porfavor compruebe los datos introducidos");
        return false
      }
    });
  });
//Crear cookies
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//Get Cookies si existe una cookie con cname devuelve true en cualquier otro caso false
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return true
    }
  }
  return false;
}

//get the value of a cookie
function getCookieValue(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
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

