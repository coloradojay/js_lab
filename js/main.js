function calc() {
    var bill = Number(document.getElementById('bill').value);
    // Get the bill from the input box
    var tip = bill * .05;
    // Calc the tipe at only 5% -- What a Cheapskate!
    var total_bill = bill + tip;
    // Calc the total bill by adding the bill and the tip

    document.getElementById("tip").innerHTML= "$"+Number(tip).toFixed(2);
    // Adding the tip calc into the tip id on the form
    document.getElementById("total").innerHTML= "$"+Number(total_bill).toFixed(2);
    // Adding the total amount to be paid (tip + bill)
    document.getElementById("gohome").innerHTML= "OUCH!<br />You need to keep saving those pennies.";
    // Adding message back to the cheapskate
}