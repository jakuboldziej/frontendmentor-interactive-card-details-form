let owner = $("#owner");
let inputOwner = $("#inputOwner");
let cardNumber = $("#cardNumber");
let inputCardNumber = $("#inputCardNumber");
let cvc = $("#card_back_text");
let cvcInput = $("#cvcInput");
let month = $("#month");
let monthInput = $("#monthInput");
let year = $("#year");
let yearInput = $("#yearInput");

inputOwner.keyup(function(e) {
    owner.text(e.target.value);
    if (e.target.value == "") {
        owner.text("Jane Appleseed");
    }
});
inputCardNumber.keyup(function(e) {
    cardNumber.text(e.target.value);
    if (e.target.value == "") {
        cardNumber.text("0000 0000 0000 0000");
    }
});
cvcInput.keyup(function(e) {
    cvc.text(e.target.value);
    if (e.target.value == "") {
        cvc.text("000");
    }
});
monthInput.keyup(function(e) {
    month.text(e.target.value);
    if (e.target.value == "") {
        month.text("00");
    }
});
yearInput.keyup(function(e) {
    year.text(e.target.value);
    if (e.target.value == "") {
        year.text("00");
    }
});