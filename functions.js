function onPress(){
    name = document.getElementById("name").value
    amount = document.getElementById("amount").value
    document.getElementById("generation").innerHTML = "successfully generated " + amount + " robux for user " + name
}