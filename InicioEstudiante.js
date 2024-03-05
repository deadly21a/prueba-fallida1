
// Función para mostrar la sección de la malla y redirigir a malla.html
function showMalla() {
    console.log('showMalla() called'); // Agrega este log

    // Redirige a malla.html
    window.location.href = 'malla.html';
}

// Asignar el evento de clic a la opción de la malla
document.getElementById('malla').addEventListener('click', showMalla);


function showMaterias() {
    console.log('showMaterias() called'); // Agrega este log

    
    window.location.href = 'materias.html';
}

// Asignar el evento de clic a la opción de la malla
document.getElementById('materias').addEventListener('click', showMaterias);


    // Inicializar FullCalendar
    $('#calendar').fullCalendar({
        // Configuración del calendario
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultDate: '2023-01-01', // Fecha de inicio por defecto
        defaultView: 'month', // Vista predeterminada al cargar
        editable: true,
        eventLimit: true, // Permite "más" en el botón de eventos
        views: {
            month: {
                // Muestra todos los meses
                titleFormat: 'MMMM YYYY',
                fixedWeekCount: false
            }
        },
        events: [
            // Puedes agregar eventos aquí
            {
                title: 'Evento de ejemplo',
                start: '2023-01-01T10:00:00',
                end: '2023-01-01T12:00:00'
            }
        ]
    });

    function updateRecentCourses() {
        var recentCoursesList = document.getElementById('recentCoursesList');
        var courses = JSON.parse(localStorage.getItem('registeredCourses')) || [];
        
        recentCoursesList.innerHTML = ''; // Limpiar la lista antes de agregar las materias
        
        courses.forEach(function(course) {
            var courseElement = document.createElement('div');
            courseElement.classList.add('course');
            courseElement.innerHTML = `
                <h2>${course.name}</h2>
                <p>${course.campus}</p>
                <p>${course.courseCode}</p>
                <p>${course.schedule}</p>
            `;
            recentCoursesList.appendChild(courseElement);
        });
    }

    // Actualizar la sección de "Mis Materias Recientes" al cargar la página
    updateRecentCourses();



