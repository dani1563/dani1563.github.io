// Función para obtener parámetros de la URL
function obtenerParametro(nombre) {
    const parametros = new URLSearchParams(window.location.search);
    return parametros.get(nombre);
}

// Cuando la página cargue
window.addEventListener('DOMContentLoaded', () => {
    // Obtener parámetros de la URL
    const nombre = obtenerParametro('fname') || 'Invitado';
    const apellido = obtenerParametro('Lname') || '';
    const boletos = obtenerParametro('boletos') || '2';
    
    // Actualizar la invitación
    document.getElementById('nombre-invitado').textContent = `${nombre} ${apellido}`;
    document.getElementById('cantidad-boletos').textContent = boletos;
    
    // Configurar botón de confirmación
    const btnConfirmar = document.getElementById('btn-confirmar');
    const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');
    
    btnConfirmar.addEventListener('click', () => {
        mensajeConfirmacion.textContent = `¡Gracias ${nombre}! Tu asistencia está confirmada para ${boletos} personas.`;
        
        // Animación simple
        btnConfirmar.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btnConfirmar.style.transform = 'scale(1)';
        }, 200);
    });
});