function prikazi() {
    document.getElementById("popup-1").classList.toggle("active");
}
function gasi() {
    document.getElementById("popup-1").classList.toggle("active");
    resetujFormu();
}



const form = document.getElementById('forma');
const ime = document.getElementById('name');
const prezime = document.getElementById('surname');
const tel = document.getElementById('tel');
const uspesno = document.getElementById('uspesno-zakzano');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    Validiraj();
});

function Validiraj() {
    const imeValue = ime.value.trim();
    const prezimeValue = prezime.value.trim();
    const telValue = tel.value.trim();
    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;

    if (imeValue === '' || imeValue == null) {

        nevalja(ime, 'Name cannot be blank');
    } else {
        valja(ime);

    }

    if (prezimeValue === '' || prezimeValue == null) {

        nevalja(prezime, 'Surname cannot be blank');
    } else {
        valja(prezime);

    }
    if (telValue == null || telValue == "") {
        nevalja(tel,'Telephone number cant be blank')
    } else if (!telValue.match(phoneno)) {
        nevalja(tel,'Not valid number format');
    }
    else if (!telValue.startsWith('06')) {
        nevalja(tel,'Number must start with 06');
    }
    else{
        valja(tel);
    }

    if (!(imeValue === '' || imeValue == null) &&
        (!(prezimeValue === '' || prezimeValue == null)) &&
        (!(telValue === '' || telValue == null))&& (telValue.match(phoneno)) && telValue.startsWith('06'))  {


        alert('You have successfully booked an appointment.\n Now you can close the tab');


    }


}

function nevalja(input, message) {

    const formElement = input.parentElement;
    const small = formElement.querySelector('small');
    small.innerText = message;
    formElement.className = 'form-element error';
}

function valja(input) {

    const formElement = input.parentElement;

    formElement.className = 'form-element success';
}

function resetujFormu() {
    form.reset();

}


function poruka() {
    alert("This option will be available soon");
}


function filtriraj() {
    var jezik = $('#jeziciSelect').find(":selected").val();
    var cenaSelected = $('#cenaSelect').find(":selected");
    var cenaValue = cenaSelected.val();
    var cena = cenaSelected[0];
    $(".profesor").show();
    if (jezik != 'all')
        $(".profesor").not("." + jezik).hide(1000);

    if (cena && cenaValue != "All")
    {
        var cenaOd = Number($(cena).data('cenaod'));
        var cenaDo = Number($(cena).data('cenado'));
        var profesori = $(".profesor:visible");
        
        for (let index = 0; index < profesori.length; index++) {
            const profesor = profesori[index];
            var cenaProfesora = Number($(profesor).data('cena'));
            if (cenaProfesora < cenaOd || cenaProfesora > cenaDo) {
                $(profesor).hide(1000);
            }
        }
    }
}


