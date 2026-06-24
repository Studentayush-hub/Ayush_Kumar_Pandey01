function calculateSI() {
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let time = parseFloat(document.getElementById("time").value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        document.getElementById("result").innerHTML =
            "Please enter all values.";
        return;
    }

    let simpleInterest = (principal * rate * time) / 100;

    document.getElementById("result").innerHTML =
        "Simple Interest = ₹" + simpleInterest.toFixed(2);
}