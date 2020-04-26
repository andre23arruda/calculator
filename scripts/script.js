ROUND_VALUE = 1000000

function put_value(key){
    if (!(document.getElementById("container-number").value)){
        document.getElementById("number-content").value = ''
        document.getElementById("container-number").value = true
    }
    console.log(document.getElementById("container-number").value)
    written_keys = document.getElementById("number-content").value
    document.getElementById("number-content").value = written_keys + key
}

function put_dot(){
    written_keys = document.getElementById("number-content").value
    document.getElementById("number-content").value = written_keys + '.'
}


function put_parenthesis(key){
    document.getElementById("container-number").value = true
    written_keys = document.getElementById("number-content").value
    document.getElementById("number-content").value = written_keys + key
}


function clean_content(){
    document.getElementById("number-content").value = ''
    document.getElementById("container-number").value = ''
}

function clean_last_value(){
    written_keys = document.getElementById("number-content").value
    if (written_keys)
        document.getElementById("number-content").value = written_keys.slice(0, -1)
}

function operation(key){
    n = document.getElementById("number-content").value
    if (!(n.includes("(")) && !(n.includes(")"))){
        document.getElementById("container-number").value = [n, key]
        document.getElementById("number-content").value = ''
    }
    else{
        document.getElementById("container-number").value = n + key

        key = key.replace("**", "^");
        key = key.replace("*", "x");
        document.getElementById("number-content").value = n + ' ' + key + ' '
    }
}

function result(){
    n = document.getElementById("container-number").value
    if(Array.isArray(n)){
        n[2] = document.getElementById("number-content").value
        res = eval('' + n.join(''))
        if (!(isNaN(res))){
            document.getElementById("number-content").value = Math.round(res * ROUND_VALUE) / ROUND_VALUE
        }
    }
    else{
        res = document.getElementById("number-content").value
        res = res.replace("^", "**");
        res = res.replace("x", "*");
        document.getElementById("number-content").value = ''
        if (!(isNaN(eval(res)))){
            document.getElementById("number-content").value = Math.round(eval(res) * ROUND_VALUE) / ROUND_VALUE
        }
    }
    console.log(res)
    document.getElementById("container-number").value = null
}

document.getElementById("number-content").select()
var input = document.getElementById("body");
input.addEventListener("keydown", function() {
    if (event.keyCode === 13) {
        event.preventDefault();
        result();
    }
});

