
function insert(value){
    document.getElementById('result').value+=value;
}

function calculate(){
    var result = document.getElementById('result').value;
    var answer = eval(result).toPrecision(3);
    document.getElementById('result').value = answer;
}

function clearResult(){
    document.getElementById('result').value='';
}


function clearLastChar(){
    let lastChar =document.getElementById('result').value;
    lastChar = lastChar.slice(0,lastChar.length-1);
    document.getElementById('result').value=lastChar;
}


