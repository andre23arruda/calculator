ROUND_VALUE = 1000000

function put_value(key){

    if (!(document.getElementById("container-number").value) && (!(isNaN(key)) || key == '(')){
        document.getElementById("number-content").value = ''
        document.getElementById("container-number").value = true
    }
    written_keys = document.getElementById("number-content").value
    document.getElementById("number-content").value = written_keys + key
    document.getElementById("container-number").value = true
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


function result(){
    res = document.getElementById("number-content").value
    res = res.replace("^", "**");
    res = res.replace("x", "*");
    document.getElementById("number-content").value = ''
    if (!(isNaN(eval(res)))){
        document.getElementById("number-content").value = Math.round(eval(res) * ROUND_VALUE) / ROUND_VALUE
    }
    document.getElementById("container-number").value = null
    easter_egg(res)
}


function easter_egg(res){
    if (res == '02/09'){
        document.getElementById("number-content").value = 'Gosto de vc <3'
    }
}


document.getElementById("number-content").select()
var input = document.getElementById("body");
input.addEventListener("keydown", function() {
    if (event.keyCode === 13) {
        event.preventDefault();
        result();
    }
});

