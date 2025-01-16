const user = "ikabeee";
const password = 1879;

let usr = prompt('Ingresa tu usuario')
let pwd = parseInt(prompt('Ingresa tu contraseña'))

if (user === usr && password === pwd) {
    document.write(`Hola ${user}`)
} else {
    alert(`Alguno de los campos no es correcto`)
}