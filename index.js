function calculateTip() {

    let billAmt = document.getElementById("amt").value;

    let servicequality = document.getElementById("service").value;
    
    let tipTotal = document.getElementById("tipTotal").value;

    let billTotal = document.getElementById("billTotal").value;


    let total = billAmt * servicequality;

    let Total = parseFloat(billAmt) + parseFloat(total);

    document.getElementById("tipTotal").innerHTML = total;

    document.getElementById("billTotal").innerHTML = Total;
}

document.getElementById("Calculate").onclick = function () {
    calculateTip();
};