/*
* Associative Array
*/


const ine = {
    name: "Rick",
    lastName: "Sánchez",
    familyName: "C-137",
    gender: "M",
    address: "Avenida Interdimensional 42, Colonia Multiverso, Ciudad México, CDMX, CP 01000",
    electoralCode: "RICS800101HXXXXX00",
    birthday: "01/01/1980",
    section: "1337",
    curp: "RICS800101HXXXXX00",
    registrationYear: "2013",
    expiration: "2025-2055",
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

