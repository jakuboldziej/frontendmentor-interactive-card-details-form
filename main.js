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
inputCardNumber.bind('keyup keypress', function (e) {
    cardNumber.text(e.target.value);
    if (e.target.value == "") {
        cardNumber.text("0000 0000 0000 0000");
    }
    $(this).val(function (index, value) {
        return value.replace(/[^0-9]+/gi, '').replace(/(.{4})/g, '$1 ');
      });
});
cvcInput.keyup(function(e) {
    if (e.target.value.length == 1) {
        cvc.text("00" + e.target.value);
    } else if (e.target.value.length == 2) {
        cvc.text("0" + e.target.value);
    } else {
        cvc.text(e.target.value);
    }
    if (e.target.value == "") {
        cvc.text("000");
    }
});
yearInput.bind('keyup mouseup', function (e) {
    if (e.target.value < 10) {
        year.text("0" + e.target.value);
    } else {
        year.text(e.target.value);
    }
    if (e.target.value == "") {
        year.text("00");
    }
});
monthInput.bind('keyup mouseup', function (e) {
    if (e.target.value < 10) {
        month.text("0" + e.target.value);
    } else {
        month.text(e.target.value);
    }
    if (e.target.value == "") {
        month.text("00");
    }
});