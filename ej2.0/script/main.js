//Funcionalidad cerrar sesión
function cerrarSesion(){
  return confirm('Estas seguro de que quieres cerrar sesison?');
}

//Funcionalidad botón exportar
function exportTable(tabla){
  tabla = "#" + tabla;
  $(tabla).tableToCSV();
}
//Para que aparezca el grado si la opción es estudiante
$(function () {
  $("#rols").change(function () {
    var val = $(this).val();
    if (val == "Estudiante") {
      $("#grado").show()
      $("#grado").html("<option value='' selected disabled>---Escoger un Grado---</option> <option value='Informatica'>Informatica</option> <option value='ADE'>ADE</option> <option value='Derecho'>Derecho</option>")
    } else {
      $("#grado").hide()
    }
  });
});

//para resetear el form
$(function () {
  $("#borrar").click(function () {
    $('#registro')[0].reset();
  });
});

//Abrir email cliente
function enviarMensaje(mail) {
  window.open("mailto:" + mail)
}

//Funcion para obtener los datos de un formulario y crear una cookie si se puede
$(function () {
  $("#registro").submit(function () {
    var cvalue = decodeURIComponent($("#registro").serialize());
    var cname = cvalue.split("&")[6].split("=")[1];
    var exdays = 30;
    if (validateForm()) {
      if (!getCookie(cname)) {
        setCookie(cname, cvalue, exdays);
      } else {
        window.alert("El email: " + cname + " ya está en uso prueba con otro");
      }

    }
  });
});

//Funcion para obtener la contraseña de una cookie
function getContraseñaCookie(cname) {
  var cvalue = getCookieValue(cname);
  var ccontraseña = cvalue.split("&")[2].split("=")[1];
  return ccontraseña;
}
//Función para obtener el usuario de una cookie
function getUsuarioCookie(cname) {
  var cvalue = getCookieValue(cname);
  var cusuario = cvalue.split("&")[0].split("=")[1];
  return cusuario;
}

//Funcion para obtener los datos del formulario de inicio de sesión e iniciar sesión si son correctos
$(function () {
  $("#inicioSesion").submit(function () {
    var form = decodeURIComponent($("#inicioSesion").serialize());
    var cname = form.split("&")[0].split("=")[1];
    var contraseña = form.split("&")[1].split("=")[1];
    if (getCookie(cname) && contraseña === getContraseñaCookie(cname)) {
      console.log("Se ha iniciado sesión");
      setCookie("actual", cname, 30);
      return true
    } else {
      window.alert("Email o contraseña incorrectos porfavor compruebe los datos introducidos");
      return false;
    }
  });
});
//Crear cookies
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//Get Cookies si existe una cookie con cname devuelve true en cualquier otro caso false
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
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
//Función al iniciar la pagina de clases
$(document).ready(function cambiarClases() {
  var email = getCookieValue("actual");
  var cvalue = getCookieValue(email);
  var usuario = cvalue.split("&")[0].split("=")[1];
  var crol = cvalue.split("&")[9].split("=")[1];

  $("#username").append(usuario);

  if (crol === "Estudiante") {
    $("#rolstudent1").show()
    $("#rolstudent2").show()
    $("#roladmin1").hide()
    $("#roladmin2").hide()
    document.getElementById("rolstudent1").addEventListener("click", RolStudent_clases)
    document.getElementById("rolstudent2").addEventListener("click", RolStudent_grades)

  }
  else {
    $("#rolstudent1").hide()
    $("#rolstudent2").hide()
  }
})

//Rol Estudiante
function RolStudent_clases() {
  $('.videos').hide();
}
function RolStudent_grades() {
  $('#tabla1').hide();
  $('#tabla2').show();
}

//get the value of a cookie
function getCookieValue(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
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
    showButtonPanel: true,
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

//Validación del form registro
function validateForm() {
  var usuario = document.forms["registro"]["usuario"];
  var NIA = document.forms["registro"]["NIA"];
  let re1 = new RegExp("^(100)([0-9]{6})$");
  var contraseña = document.forms["registro"]["contraseña"];
  let re2 = new RegExp("^(?=.*[0-9])(?=.*[a-z])([a-z0-9]+)$");
  var nombre = document.forms["registro"]["nombre"];
  var apellido1 = document.forms["registro"]["apellido1"];
  var apellido2 = document.forms["registro"]["apellido2"];
  var email = document.forms["registro"]["email"];
  let re3 = new RegExp('(.+)@(.+){2,}\.(.+){2,}');
  var fecha = document.forms["registro"]["fechaNacimiento"];
  var DNI = document.forms["registro"]["DNI"];
  let re4 = new RegExp("([0-9]{8})([-]?)([A-Z]{1})");
  var rol = document.forms["registro"]["rols"];
  var uni = document.forms["registro"]["uni"];
  var condiciones = document.getElementById("condiciones")

  if (usuario.value === "") {
    window.alert("Please enter your username.");
    usuario.focus();
    return false;
  }
  if (NIA.value === "" || !re1.test(NIA.value)) {
    window.alert("Please check the format of your NIA");
    NIA.focus();
    return false;
  }
  if (contraseña.value == "" || !re2.test(contraseña.value) || contraseña.value.length > 8) {
    window.alert("Password must contain at leas 1 number and 1 character and must be less than 8 character long");
    contraseña.focus();
    return false;
  }
  if (nombre.value === "") {
    window.alert("Please enter your name.");
    nombre.focus();
    return false;
  }
  if (apellido1.value === "") {
    window.alert("Please enter your lastname1.");
    apellido1.focus();
    return false;
  }
  if (apellido2.value === "") {
    window.alert("Please enter your lastname2.");
    apellido2.focus();
    return false;
  }
  if (email.value === "" || !re3.test(email.value)) {
    window.alert("Please provide a valid email");
    email.focus();
    return false;
  }
  if (fecha.value === "") {
    window.alert("Please enter your birthday");
    fecha.focus();
    return false;
  }
  if (DNI.value === "" || !re4.test(DNI.value) || DNI.value.length > 10) {
    window.alert("Please enter a valid ID");
    DNI.focus();
    return false;
  }
  if (rol.value === "") {
    window.alert("Please enter a rol");
    rol.focus();
    return false;
  }
  if (uni.value === "") {
    window.alert("Please enter a uni");
    uni.focus();
    return false;
  }
  if (!condiciones.checked) {
    window.alert("Please accept condiciones de uso");
    condiciones.focus();
    return false;
  }
  return true
}

function displayClases() {
  $('.videos').show();
  document.getElementsByClassName("clases")[0].style.display = "block"
  document.getElementsByClassName("forum")[0].style.display = "none"
  document.getElementsByClassName("calificaciones")[0].style.display = "none"
  document.getElementsByClassName("listado")[0].style.display = "none"
  document.getElementsByClassName("tema_foro")[0].style.display = "none"
  document.getElementsByClassName("tema_foro")[1].style.display = "none"
  document.getElementsByClassName("tema_foro")[2].style.display = "none"
  document.getElementsByClassName("tema_foro")[3].style.display = "none"
  document.getElementsByClassName("tema_foro")[4].style.display = "none"

}

function displayStudents() {
  document.getElementsByClassName("clases")[0].style.display = "none"
  document.getElementsByClassName("forum")[0].style.display = "none"
  document.getElementsByClassName("calificaciones")[0].style.display = "none"
  document.getElementsByClassName("listado")[0].style.display = "block"
  document.getElementsByClassName("tema_foro")[0].style.display = "none"
  document.getElementsByClassName("tema_foro")[1].style.display = "none"
  document.getElementsByClassName("tema_foro")[2].style.display = "none"
  document.getElementsByClassName("tema_foro")[3].style.display = "none"
  document.getElementsByClassName("tema_foro")[4].style.display = "none"

}

function displayForum() {
  document.getElementsByClassName("clases")[0].style.display = "none"
  document.getElementsByClassName("forum")[0].style.display = "block"
  document.getElementsByClassName("calificaciones")[0].style.display = "none"
  document.getElementsByClassName("listado")[0].style.display = "none"
  document.getElementsByClassName("tema_foro")[0].style.display = "none"
  document.getElementsByClassName("tema_foro")[1].style.display = "none"
  document.getElementsByClassName("tema_foro")[2].style.display = "none"
  document.getElementsByClassName("tema_foro")[3].style.display = "none"
  document.getElementsByClassName("tema_foro")[4].style.display = "none"

}

function displayGrades() {
  $('#tabla2').hide()
  document.getElementsByClassName("clases")[0].style.display = "none"
  document.getElementsByClassName("forum")[0].style.display = "none"
  document.getElementsByClassName("calificaciones")[0].style.display = "block"
  document.getElementsByClassName("listado")[0].style.display = "none"
  document.getElementsByClassName("tema_foro")[0].style.display = "none"
  document.getElementsByClassName("tema_foro")[1].style.display = "none"
  document.getElementsByClassName("tema_foro")[2].style.display = "none"
  document.getElementsByClassName("tema_foro")[3].style.display = "none"
  document.getElementsByClassName("tema_foro")[4].style.display = "none"
}


function displayTema(id) {
  var tema = "#tema_foro" + id;
  $(".forum").hide();
  $(tema).css("display", "flex");
}

function enviar(id) {
  var emailSesion = getCookieValue("actual");
  var cookieActual = getCookieValue(emailSesion);
  var nombre = cookieActual.split("&")[3].split("=")[1];
  var apellido1 = cookieActual.split("&")[4].split("=")[1];
  var apellido2 = cookieActual.split("&")[5].split("=")[1];
  var nombreCompleto = nombre + " " + apellido1 + " " + apellido2;
  var d = new Date();
  var date = d.toLocaleString();
  var formulario = "#" + "form" + id;
  var titulo = "#" + "titulo" + id;
  var mensaje = decodeURIComponent($(formulario).serialize().split("=")[1]);
  var titulo = "RE: " + $(titulo).text();
  $('<div class="mensaje"><div class="titulo_mensaje"><img src="images/avatar.jpg"><h4>' + titulo + '</h4></div><div class="autor_mensaje"><h5>de ' + nombreCompleto + ' - ' + date + '</h5></div><div class="contenido"><p>' + mensaje + '</p></div></div>').insertBefore("#enviar_foro" + id);
}