const details = document.querySelector('.info-details');
details.classList.add("hidden");

const info = document.querySelectorAll('.info-detail');
const h3 = document.querySelectorAll('.titulo-detail');
const p = document.querySelectorAll('.p-detail');
const ancla = document.querySelectorAll('.link');


const title = document.createElement("h3");
title.setAttribute("id", "title-detail");

const paragraph = document.createElement("p");
paragraph.setAttribute("id", "text-detail");

const button = document.createElement("button")
button.classList.add("info-detail");
button.innerText = "IR"

const a = document.createElement("a");
a.setAttribute("target", "_blank")


for (let index = 0; index < info.length; index++) {
    info[index].addEventListener('click', function (e) {
        e.preventDefault();

        if (window.innerWidth >= 729) {
            // window.location.href = ancla[index].href
            window.open(ancla[index].href, "_blank")
        } else {

            const detail = document.querySelector('.details');


            title.innerHTML = h3[index].innerHTML;
            paragraph.innerHTML = p[index].innerHTML
            a.href = ancla[index].href

            // console.log(e);
            // console.log(h3[index].innerHTML);
            // console.log(ancla[index].href);

            details.classList.remove("hidden");

            // detail.appendChild(i);
            detail.appendChild(title);
            detail.appendChild(paragraph);
            a.appendChild(button)
            detail.appendChild(a)
        }

    });
}


document.querySelector('.cierre').addEventListener('click', function (e) {
    e.preventDefault()
    details.classList.add("hidden");

});

