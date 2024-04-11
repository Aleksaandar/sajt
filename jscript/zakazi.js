
let sastanci = [];

class Sastanak {
    constructor(ime, prezime, adresa, brojTelefona, grad, osoblje) {
        this.ime = ime;
        this.prezime = prezime;
        this.adresa = adresa;
        this.brojTelefona = brojTelefona;
        this.grad = grad;
        this.osoblje = osoblje;


    }
}

function Mapa() {
    var vrednost = document.querySelector('input[name="optradio"]:checked').value;
    var divMape = document.querySelectorAll('.divMapa');
    divMape.forEach(element => {
        element.style.display = 'none';
    });

    var selektovani = document.querySelector('.' + vrednost);
    selektovani.style.display = 'block';
}

function Obrisi() {
    document.getElementById("ime").value = "";
    document.getElementById("prezime").value = "";
    document.getElementById("adresa").value = "";
    document.getElementById("brojTelefona").value = "";
    document.querySelector("#city").value = "izaberi";
    var radio = document.querySelector('input[type=radio][name=staff]:checked');
    radio.checked = false;
}

function Validiraj() {
    var ime = document.getElementById("ime").value;
    var prezime = document.getElementById("prezime").value;
    var adresa = document.getElementById("adresa").value;
    var brojTelefona = document.getElementById("brojTelefona").value;
    var grad = document.forms["myForm"]["city"];
    var staff = document.forms["myForm"]["staff"];
    var poruka = "";
    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
    if (ime == null || ime == "") {
        poruka += "Morate uneti ime\n";
    }
    if (prezime == null || ime == "") {
        poruka += "Morate uneti prezime\n";
    }
    if (adresa == null || adresa == "") {
        poruka += "Morate uneti adresu\n";
    }
    if (brojTelefona == null || brojTelefona == "") {
        poruka += "Morate uneti broj telefona\n";
    } else if (!brojTelefona.match(phoneno)) {
        poruka += "Upisite broj telefona u formatu: 06x xxx xxx ili 06x-xxx-xxx ili 06x.xxx.xxx\n";
    }
    else if (!brojTelefona.includes('06')) {
        poruka += "Broj telefona mora poceti sa 06\n";
    }
    if (grad.selectedIndex == 0) {
        poruka += "Izaberite grad za sastanak\n";
    }

    if (staff[0].checked == false && staff[1].checked == false && staff[2].checked == false) {
        poruka += "Morate izabrati  sa kim zelite sastanak\n";
    }

    if (poruka !== "") {
        alert(poruka);
    }
    else {
        Zakazi(ime, prezime, adresa, brojTelefona);
    }
}

function Zakazi(ime, prezime, adresa, brojTelefona) {
    var grad = document.querySelector("#city").value;
    var osoblje = document.querySelector('input[name="staff"]:checked').value;
    var poruka = 'Molimo vas proverite unete podatke:' + '\n' + ime + '\n' + prezime + '\n' + adresa + '\n'
     + brojTelefona + '\n' + grad + '\n' + osoblje;
    if (confirm(poruka)) {
        alert("Sastanak je zakazan!");
    } else {
        alert("Ponovo unesite podatke");
    }
}
