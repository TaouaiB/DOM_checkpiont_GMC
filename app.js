var plus = Array.from(document.querySelectorAll(".fa-plus"));
var minus = Array.from(document.querySelectorAll(".fa-minus"));
var favs = Array.from(document.querySelectorAll(".fa-heart"));
var deletebtn = Array.from(document.querySelectorAll(".fa-trash"));
var cards = Array.from(document.querySelectorAll(".card"));

for (let fav of favs) {
    fav.addEventListener("click", function () {
        if (fav.style.color != "red") {
            fav.style.color = "red";
        } else {
            fav.style.color = "black";
        }
    });
}

for (let i in deletebtn) {
    deletebtn[i].addEventListener("click", function () {
        cards[i].remove();
        total();
    });
}

for (let p of plus) {
    p.addEventListener("click", function () {
        p.nextElementSibling.innerHTML++;
        total();
    });
}

for (let m of minus) {
    m.addEventListener("click", function () {
        if (m.previousElementSibling.innerHTML > 0) {
            m.previousElementSibling.innerHTML--;
            total();
        }
    });
}

function total() {
    console.log("Calculating total...");
    let qte = Array.from(document.querySelectorAll(".qte"));
    let price = Array.from(document.querySelectorAll(".price"));
    let t = 0;

    for (let i in qte) {
        if (price[i] && qte[i]) {
            t += parseFloat(price[i].innerHTML) * parseInt(qte[i].innerHTML);
        }
    }

    console.log("Total:", t);
    document.querySelector(".totalprice").innerHTML = t.toFixed(2);
}
