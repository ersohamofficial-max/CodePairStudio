let cards = document.querySelectorAll('.contact_card');
let button = document.querySelector("button");
let button2 = document.querySelectorAll('.form-submit-btn');
let isOn = false;

button.addEventListener("click", function () {

    cards.forEach(card => {
        if (isOn == false) {
            card.style.visibility = "visible";
        } else {
            card.style.visibility = "hidden";
        }
    });

    
});
let submit = false
button2.forEach(btn => {
    btn.addEventListener("click", function () {
        if (!submit) {
            alert("Thank you for contacting us");
            submit = true;
        }
    });
});
