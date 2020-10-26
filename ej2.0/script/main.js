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