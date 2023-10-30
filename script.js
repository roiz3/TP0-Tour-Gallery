function validarEnviar() {
    let nombre = document.forms.formulario.nombre.value;
    let email = document.forms.formulario.email.value;
   
    if (nombre.length <= 3) {
        alert("Ingrese un nombre válido");
        document.forms.formulario.nombre.focus();
        return;
    }

  
    let emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    if (!email.match(emailRegex)) {
        alert("Ingrese una dirección de correo electrónico válida");
        document.forms.formulario.email.focus();
        return;
    }

    alert("Enviado exitosamente!");
    document.forms.formulario.submit();
}
