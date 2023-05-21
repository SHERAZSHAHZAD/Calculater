function appendNumber(num) {
    document.getElementById("result").value += num;
}
function appendOperater(op) {
    document.getElementById("result").value += op;

}
function clearResult(params) {
    document.getElementById("result").value = " ";
}
function deleteNumber(){


}
function checkResult(params) {
let result = document.getElementById("result").value;
try {
    let answer = eval(result);
    document.getElementById("result").value = answer;

} catch (error) {
    console.log("error : " + error);
     document.getElementById("result").value = "Error";
}    
}
