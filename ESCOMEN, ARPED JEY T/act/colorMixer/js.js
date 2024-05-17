var colorr = []
const checker = document.getElementById("checker");

function color(value){
    colorr.push (value);
    checker.innerHTML = colorr
}

function remove (){
    colorr.pop();
    checker.innerHTML = colorr;
    if (checker.innerHTML== ""){
        checker.innerHTML = "No color"
    }else{
    
    }
}

function no(){
    checker.innerHTML = "No color";
    colorr = [];
}