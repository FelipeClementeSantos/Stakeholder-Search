document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Simulação de validação
        if (username === "FelipeClemente" && password === "1234") {
            window.location.href = "./tela1.html";
        } else {
            alert("Usuário ou senha inválidas. Tente novamente.");
        }
    });
});
