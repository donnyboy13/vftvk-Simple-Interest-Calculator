function compute() {
    var principal = document.getElementById("principal").value;
    if(parseInt(principal) <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;

        var interest = principal * years * rate / 100;

        var current_year = new Date().getFullYear();
        var target_year = parseInt(current_year) + parseInt(years);

        document.getElementById("slider").innerHTML = rate;

        let output = "If you depost " + principal + "\n" + "at an interest rate of " + rate + "%" + "\n" + "You will receive an amount of " + interest + "," + "\n" + "in the year " + target_year

        document.getElementById("result").innerHTML = output
      }
}

function rateSlider() {
    var rate = document.getElementById("rate").value;
    document.getElementById("slider").innerHTML = rate;
}