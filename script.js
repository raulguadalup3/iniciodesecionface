
FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});

FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
        // La persona inició sesión en Facebook y en tu aplicación
        // Aquí puedes redirigirla a la experiencia de sesión iniciada de tu aplicación
        // Por ejemplo, podrías redirigirla a una página de bienvenida o a su perfil
        window.location.href = 'pagina_de_bienvenida.html';
    } else if (response.status === 'not_authorized') {
        // La persona inició sesión en Facebook pero no en tu aplicación
        // Puedes mostrar un mensaje indicándole que inicie sesión en tu aplicación
        alert('Por favor, inicia sesión en la aplicación');
    } else {
        // La persona no inició sesión en Facebook y no sabemos si lo hizo en tu aplicación
        // o si se llamó antes al método FB.logout()
        // Puedes mostrar el botón de inicio de sesión o el cuadro de diálogo de inicio de sesión
        // y manejar el inicio de sesión en FB.login()
        mostrarBotonInicioSesion();
    }
});
