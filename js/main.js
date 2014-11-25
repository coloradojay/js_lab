function calc() {
    var bill = Number(document.getElementById('bill').value);
    var tip = bill * .05;
    var total_bill = bill + tip;

    document.getElementById("tip").innerHTML= "$"+Number(tip).toFixed(2);
    document.getElementById("total").innerHTML= "$"+Number(total_bill).toFixed(2);  
    document.getElementById("gohome").innerHTML= "OUCH!<br />You need to keep saving those pennies.";       
}