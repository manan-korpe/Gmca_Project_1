let inputTable = document.getElementById("user-input-table");
let inputField = document.getElementById("user-input");

inputTable.addEventListener("click",(e)=>{
    if(inputField){
        inputField.value += e.target.innerText;
    }
})