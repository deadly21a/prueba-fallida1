// Esta función se ejecutará cuando el contenido HTML haya sido completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Llama a la función updateRecentCourses después de que el contenido HTML haya sido cargado
    updateRecentCourses();
});

function updateRecentCourses() {
    var recentCoursesList = document.getElementById('recentCoursesList');
    recentCoursesList.innerHTML = ''; // Limpiar la lista antes de agregar las materias

    var courses = JSON.parse(localStorage.getItem('registeredCourses')) || [];
    var uniqueCourses = Array.from(new Set(courses.map(course => course.id)))
                        .map(id => courses.find(course => course.id === id));

    uniqueCourses.forEach(function(course) {
        if (course) { // Verificar si el curso existe
            var courseElement = document.createElement('div');
            courseElement.classList.add('course');
            courseElement.innerHTML = `
                <h2>Materia: ${course.name}</h2>
                <p>Campus: ${course.campus}</p>
                <p>Curso: ${course.courseCode}</p>
                <p>Horario: ${course.schedule}</p>
            `;
            recentCoursesList.appendChild(courseElement);
        }
    });
}
