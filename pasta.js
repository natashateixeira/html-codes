function logar () {
    let login = document.querySelector("#login").value
    let senha = document.querySelector("#senha").value
    if (login === "admin" && senha === "123") {
        alert("Você está logado(a)")
    } else {
        alert ("Login e senha inválidos.")
    }
}