
function check_number(){
    var number = document.getElementById("number").value;
    if(parseInt(number) % 2 == 0){
        document.alert(number);
    }
    else
    {
        alert("number is odd ");
        document.write("number is even");
    }
}