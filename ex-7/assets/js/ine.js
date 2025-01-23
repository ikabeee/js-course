/*
* Associative Array
*/


const ine = {
    name: "Pedro",
    lastName: "Pica",
    familyName: "Papas",
    gender: "M",
    address: "Calle Falsa 123, Colonia Inventada, Ciudad Fantasía, Estado Desconocido, CP 12345",
    electoralCode: "PIPP900924HXXXXX00",
    birthday: "24/09/1990",
    section: "0065",
    curp: "PIPP900924HXXXXX00",
    registrationYear: "2017",
    expiration: "2010-2050",
    img: "./assets/imgs/rick.jpg"
}

let name = ine.name;
let lastName = ine.lastName;
let familyName = ine.familyName;
let gender = ine.gender;
let address = ine.address;
let electoralCode = ine.electoralCode;
let birthday = ine.birthday;
let section = ine.section;
let curp = ine.curp;
let registrationYear =ine.registrationYear
let expiration = ine.expiration
let img = ine.img;

document.getElementById('name').innerHTML = name;
document.getElementById('lastName').innerHTML = lastName;
document.getElementById('familyName').innerHTML = familyName;
document.getElementById('address').innerHTML = address
document.getElementById('electoralCode').innerHTML = electoralCode
document.getElementById('curp').innerHTML = curp;
document.getElementById('birthday').innerHTML = birthday
document.getElementById('section').innerHTML = section
document.getElementById('registrationYear').innerHTML = registrationYear
document.getElementById('expiration').innerHTML = expiration
document.getElementById('photoId').src = img

