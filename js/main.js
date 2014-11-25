function calc() {
    var bill = document.getElementById('bill').value;
    var tip = bill * .05;
    var total = bill + tip;

    document.getElementById("tip").innerHTML= "$"+(tip).toFixed(2);
    document.getElementById("total").innerHTML= "$"+(total).toFixed(2);         
}