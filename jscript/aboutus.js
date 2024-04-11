document.addEventListener('DOMContentLoaded', function () {
    (function () {
        let sr = document.querySelectorAll('.my-star');
        let i = 0;
        while (i < sr.length) {
            sr[i].addEventListener('click', function () {
                let cs = parseInt(this.getAttribute("data-star"));
                document.querySelector('#output').value = cs;
                let pre = cs;
                while (1 <= pre) {
                    if (!document.querySelector('.star-' + pre).classList.contains('is-active')) {
                        document.querySelector('.star-' + pre).classList.add('is-active');
                    }
                    --pre;
                }
                let succ = cs + 1;
                while (5 >= succ) {
                    if (document.querySelector('.star-' + succ).classList.contains('is-active')) {
                        document.querySelector('.star-' + succ).classList.remove('is-active');
                    }
                    ++succ;
                }
            });
            i++;
        }
    })();
});

function DodajKomentar() {
    //odredi se lista u koju se unosi novi element
    var ul = document.getElementById("listaKom");
    //vrednost elementa treba da predstavlja tekst iz textarea - komentar
    var komentar = document.getElementById("komentar");

    //pomocu "createElement" f-je se kreira novi element iz liste, tipa "li"
    var li = document.createElement("li");
    //JS f-ja Date() pravi novi objekat sa vrednoscu danasnjeg datum
    var datum = new Date();
    //danasnji datum citljiv za ljude
    var sadrzajElementa = datum.toDateString();
    sadrzajElementa += "\nKomentar: ";
    sadrzajElementa += komentar.value;
    li.setAttribute("id", sadrzajElementa);
    //u li element se ubacuje vrednost pomocu f-je append
    li.appendChild(document.createTextNode(sadrzajElementa));
    //u listu se ubacuje element li kao dete
    ul.appendChild(li);
}

